import { useState } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';

const contactMethods = [
  {
    label: 'Email us',
    value: 'info@barakamedicals.com',
    detail: 'For general and product enquiries',
    href: 'mailto:info@barakamedicals.com',
    icon: Mail,
  },
  {
    label: 'Call us',
    value: '+974 XXXX XXXX',
    detail: 'Speak directly with our team',
    href: 'tel:+974XXXXXXXX',
    icon: Phone,
  },
  {
    label: 'Visit us',
    value: 'Doha, Qatar',
    detail: 'Serving healthcare teams across Qatar',
    icon: MapPin,
  },
];

const inquiryChecklist = [
  'The product or equipment category',
  'Your preferred quantity or specification',
  'When you need it delivered',
];

const fieldClassName =
  'mt-2 w-full rounded-xl border border-gray-300 bg-gray-50/70 px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((current) => ({ ...current, [name]: value }));
    setIsSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setFormData({
      name: '',
      organization: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-brand-100 bg-gradient-to-br from-brand-50 via-white to-gray-50">
        <div
          className="absolute -right-20 -top-24 h-80 w-80 rounded-full border-[56px] border-brand-100/60"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-brand-100/50 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20 lg:px-8 lg:py-24">
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
              <span className="h-px w-8 bg-brand-400" aria-hidden="true" />
              Contact Baraka
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Let’s find what your facility needs
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Whether you are sourcing everyday consumables or specialist equipment, our team will
              help you identify suitable options with clear pricing and availability.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-gray-600">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-600" aria-hidden="true" />
                Product guidance
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-600" aria-hidden="true" />
                Clear quotations
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-600" aria-hidden="true" />
                Local support
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/80 bg-white/80 p-6 shadow-[0_22px_70px_-38px_rgba(28,67,91,0.32)] backdrop-blur sm:rounded-3xl sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <Clock3 className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-bold text-gray-900">Help us respond efficiently</p>
                <p className="mt-0.5 text-sm text-gray-500">A few useful details to include</p>
              </div>
            </div>

            <ul className="mt-6 space-y-4">
              {inquiryChecklist.map((item, index) => (
                <li key={item} className="flex items-center gap-4 text-sm leading-6 text-gray-700">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-600 text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact details and form */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <aside>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                Reach our team
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
                Start the conversation your way
              </h2>
              <p className="mt-4 leading-7 text-gray-600">
                Send an enquiry using the form, or contact our Doha team directly using the details
                below.
              </p>

              <div className="mt-9 overflow-hidden rounded-2xl border border-gray-200 bg-white">
                {contactMethods.map(({ label, value, detail, href, icon: Icon }) => {
                  const content = (
                    <>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-100">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                          {label}
                        </span>
                        <span className="mt-1 block font-bold text-gray-900">{value}</span>
                        <span className="mt-1 block text-sm leading-5 text-gray-500">{detail}</span>
                      </span>
                      {href && (
                        <ArrowUpRight
                          className="h-4 w-4 shrink-0 text-gray-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600"
                          aria-hidden="true"
                        />
                      )}
                    </>
                  );

                  return href ? (
                    <a
                      key={label}
                      href={href}
                      className="group flex gap-4 border-b border-gray-200 p-5 transition-colors last:border-0 hover:bg-gray-50 sm:p-6"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={label} className="group flex gap-4 p-5 sm:p-6">
                      {content}
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-2xl bg-brand-900 p-6 text-white">
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10">
                    <MapPin className="h-5 w-5 text-brand-100" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-bold">Based in Doha</p>
                    <p className="mt-1 text-sm leading-6 text-brand-100">
                      Supporting hospitals, clinics, laboratories and pharmacies across Qatar.
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_24px_70px_-42px_rgba(18,43,60,0.3)] sm:rounded-3xl sm:p-9 lg:p-11">
              <div className="flex flex-col gap-3 border-b border-gray-200 pb-7 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                    Send an enquiry
                  </p>
                  <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    Tell us how we can help
                  </h2>
                </div>
                <p className="text-sm text-gray-500">Fields marked * are required</p>
              </div>

              {isSubmitted && (
                <div
                  className="mt-7 flex gap-3 rounded-xl border border-brand-200 bg-brand-50 p-4 text-sm leading-6 text-brand-800"
                  role="status"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                  <p>
                    <strong className="font-bold">Thank you for reaching out.</strong> Our team will
                    review your enquiry and get back to you.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm font-semibold text-gray-800">
                      Full name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      className={fieldClassName}
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="text-sm font-semibold text-gray-800">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      autoComplete="organization"
                      className={fieldClassName}
                      placeholder="Hospital, clinic or company"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="text-sm font-semibold text-gray-800">
                      Email address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      className={fieldClassName}
                      placeholder="name@organization.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="text-sm font-semibold text-gray-800">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      className={fieldClassName}
                      placeholder="+974 XXXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="text-sm font-semibold text-gray-800">
                    How can we help? *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={fieldClassName}
                  >
                    <option value="" disabled>
                      Select an enquiry type
                    </option>
                    <option value="quote">Request a quotation</option>
                    <option value="product">Product information</option>
                    <option value="availability">Pricing and availability</option>
                    <option value="partnership">Supplier or partnership enquiry</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-semibold text-gray-800">
                    Your message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className={`${fieldClassName} resize-y`}
                    placeholder="Tell us about the products, quantities or specifications you need..."
                  />
                </div>

                <div className="flex flex-col gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-sm text-xs leading-5 text-gray-500">
                    We use your details only to respond to this enquiry.
                  </p>
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-brand-600 px-7 py-3.5 font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                  >
                    Send enquiry
                    <Send
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
