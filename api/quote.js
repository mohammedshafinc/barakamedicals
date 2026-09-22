/**
 * Receives a quote request from the contact form and emails it to the sales
 * inbox through Resend's HTTP API.
 *
 * This runs as a Vercel Function: any file in /api is deployed as one. The
 * point of putting it server-side is RESEND_API_KEY — a browser-only form
 * service would have to ship its key inside the JavaScript bundle, where
 * anyone could lift it and send mail as us.
 *
 * Environment variables (set these in the Vercel dashboard):
 *   RESEND_API_KEY   required, from resend.com/api-keys
 *   QUOTE_TO_EMAIL   optional, defaults to info@barakamedicals.com
 *   QUOTE_FROM_EMAIL optional, must be on a domain verified in Resend
 */
import { ENQUIRY_LABELS } from '../src/data/enquiryTypes.js';

const DEFAULT_TO = 'info@barakamedicals.com';
// Sends from a subdomain so Resend's SPF/DKIM records never collide with the
// root-domain records that deliver mail to info@barakamedicals.com.
const DEFAULT_FROM = 'Baraka Website <quotes@send.barakamedicals.com>';

// Generous caps. They exist to stop someone posting a megabyte of text, not to
// constrain a genuine enquiry.
const MAX_LENGTHS = {
  name: 120,
  organization: 160,
  email: 200,
  phone: 40,
  message: 5000,
};

// Deliberately loose. The job is catching typos, not adjudicating RFC 5322.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const HTML_ESCAPES = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

/** Enquiry text lands in an HTML email, so it has to be escaped on the way in. */
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (ch) => HTML_ESCAPES[ch]);

const asText = (value) => (typeof value === 'string' ? value.trim() : '');

/**
 * Validates the payload. The browser enforces `required` too, but anything can
 * POST here, so the checks are repeated where they cannot be bypassed.
 */
const validate = (body) => {
  const fields = {
    name: asText(body.name),
    organization: asText(body.organization),
    email: asText(body.email),
    phone: asText(body.phone),
    subject: asText(body.subject),
    message: asText(body.message),
  };

  const errors = [];

  if (!fields.name) errors.push('Please enter your name.');
  if (!fields.email) {
    errors.push('Please enter your email address.');
  } else if (!EMAIL_PATTERN.test(fields.email)) {
    errors.push('Please enter a valid email address.');
  }
  if (!fields.message) errors.push('Please tell us what you need.');
  if (!ENQUIRY_LABELS.has(fields.subject)) errors.push('Please choose an enquiry type.');

  for (const [field, limit] of Object.entries(MAX_LENGTHS)) {
    if (fields[field].length > limit) {
      errors.push(`${field} is too long (maximum ${limit} characters).`);
    }
  }

  return { fields, errors };
};

const buildEmail = (fields) => {
  const enquiryType = ENQUIRY_LABELS.get(fields.subject);
  const rows = [
    ['Name', fields.name],
    ['Organization', fields.organization || '—'],
    ['Email', fields.email],
    ['Phone', fields.phone || '—'],
    ['Enquiry type', enquiryType],
  ];

  const text = [
    ...rows.map(([label, value]) => `${label}: ${value}`),
    '',
    'Message:',
    fields.message,
  ].join('\n');

  const html = `
    <div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#1f3a33;line-height:1.6">
      <h2 style="margin:0 0 16px;font-size:18px">New quote request</h2>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px">
        ${rows
          .map(
            ([label, value]) => `<tr>
          <td style="padding:4px 16px 4px 0;color:#54626c;vertical-align:top">${escapeHtml(label)}</td>
          <td style="padding:4px 0"><strong>${escapeHtml(value)}</strong></td>
        </tr>`,
          )
          .join('')}
      </table>
      <p style="margin:20px 0 6px;color:#54626c;font-size:14px">Message</p>
      <div style="white-space:pre-wrap;border-left:3px solid #cbe1db;padding:4px 0 4px 14px;font-size:14px">${escapeHtml(
        fields.message,
      )}</div>
    </div>
  `;

  return {
    subject: `Quote request: ${enquiryType} — ${fields.name}`,
    text,
    html,
  };
};

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Logged for us, not described to the caller: configuration problems should
    // not tell a stranger what is missing.
    console.error('RESEND_API_KEY is not set; cannot send quote request.');
    return response
      .status(500)
      .json({ error: 'Email is not configured yet. Please email info@barakamedicals.com.' });
  }

  let body = request.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return response.status(400).json({ error: 'Could not read the submitted form.' });
    }
  }
  body = body ?? {};

  // Honeypot: a field no human sees and no human fills in. Bots complete every
  // input they find. Answer 200 so they log a success and move on.
  if (asText(body.website)) {
    return response.status(200).json({ ok: true });
  }

  const { fields, errors } = validate(body);
  if (errors.length > 0) {
    return response.status(400).json({ error: errors[0], errors });
  }

  const { subject, text, html } = buildEmail(fields);

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.QUOTE_FROM_EMAIL || DEFAULT_FROM,
        to: [process.env.QUOTE_TO_EMAIL || DEFAULT_TO],
        // Replying in the inbox then goes straight to the customer.
        reply_to: fields.email,
        subject,
        text,
        html,
      }),
    });

    if (!resendResponse.ok) {
      const detail = await resendResponse.text();
      console.error('Resend rejected the request', resendResponse.status, detail);
      return response.status(502).json({
        error: 'We could not send your enquiry. Please email info@barakamedicals.com.',
      });
    }

    return response.status(200).json({ ok: true });
  } catch (error) {
    console.error('Failed to reach Resend', error);
    return response.status(502).json({
      error: 'We could not send your enquiry. Please email info@barakamedicals.com.',
    });
  }
}
