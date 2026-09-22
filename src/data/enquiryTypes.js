/**
 * Enquiry types offered by the contact form.
 *
 * Shared by the form's <select> and by api/quote.js, which validates the
 * submitted value against this list and uses the label in the email it sends.
 * Keeping one list means a new option can never show up in the form as an
 * unreadable slug in the inbox.
 */
export const ENQUIRY_TYPES = [
  { value: 'diagnostics', label: 'Diagnostics and imaging equipment' },
  { value: 'monitoring', label: 'Patient monitoring systems' },
  { value: 'rehabilitation', label: 'Rehabilitation equipment' },
  { value: 'ent-audiology', label: 'ENT and audiology devices' },
  { value: 'consumables', label: 'Medical consumables' },
  { value: 'service', label: 'Installation, servicing or spare parts' },
  { value: 'other', label: 'Something else' },
];

export const ENQUIRY_LABELS = new Map(
  ENQUIRY_TYPES.map(({ value, label }) => [value, label]),
);
