import {
  Award,
  Building2,
  CheckCircle2,
  Eye,
  HeartPulse,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
} from 'lucide-react';

const audiences = ['Hospitals', 'Clinics', 'Laboratories', 'Pharmacies', 'Healthcare professionals'];

const values = [
  {
    title: 'Quality',
    description: 'We are committed to supplying products that meet high standards of safety and performance.',
    icon: Award,
  },
  {
    title: 'Integrity',
    description: 'We conduct business with honesty, transparency, and professionalism.',
    icon: ShieldCheck,
  },
  {
    title: 'Customer Focus',
    description: "Our customers' needs are at the center of everything we do.",
    icon: Users,
  },
  {
    title: 'Innovation',
    description: 'We continuously seek advanced medical technologies that improve healthcare delivery.',
    icon: Lightbulb,
  },
  {
    title: 'Reliability',
    description: 'We deliver dependable products and responsive service our customers can count on.',
    icon: CheckCircle2,
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      <section className="relative overflow-hidden bg-brand-800 py-20 sm:py-24 lg:py-28">
        <div
          className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-white/[0.04]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-300/50 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent-200">
              <HeartPulse className="h-4 w-4" aria-hidden="true" />
              About Us
            </div>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Welcome to <span className="text-accent-300">Baraka</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">
              At Baraka, we are dedicated to improving healthcare by providing high-quality medical
              devices and healthcare solutions to hospitals, clinics, laboratories, pharmacies, and
              healthcare professionals. Our commitment is to deliver reliable products that support
              better patient care, enhance clinical performance, and meet the evolving needs of the
              medical industry.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-700">
                Who we are
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Healthcare solutions chosen with care
              </h2>
              <div className="mt-7 space-y-5 text-base leading-8 text-gray-600 sm:text-lg">
                <p>
                  We partner with trusted manufacturers and suppliers to offer a carefully selected
                  range of medical devices that meet recognized quality and safety standards. From
                  diagnostic equipment and patient monitoring solutions to surgical instruments and
                  medical consumables, we strive to ensure our customers have access to dependable
                  products at competitive prices.
                </p>
                <p>
                  Our experienced team understands the importance of timely service, technical
                  expertise, and long-term customer relationships. We work closely with healthcare
                  providers to recommend the right solutions and provide responsive support throughout
                  every stage of the purchasing process.
                </p>
              </div>
            </div>

            <aside className="relative overflow-hidden rounded-3xl bg-gray-50 p-7 shadow-sm ring-1 ring-gray-200 sm:p-9">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-accent-400/15" aria-hidden="true" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-700 text-white">
                  <Building2 className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">Serving every part of healthcare</h3>
                <p className="mt-2 leading-7 text-gray-600">
                  Dependable products, expert guidance, and responsive support for the professionals
                  who care for our communities.
                </p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {audiences.map((audience) => (
                    <li key={audience} className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-700" aria-hidden="true" />
                      {audience}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-700">Our direction</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">Purpose that guides our work</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
            <article className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600/10 text-brand-700 transition group-hover:bg-brand-700 group-hover:text-white">
                <Target className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mt-7 text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="mt-4 text-base leading-8 text-gray-600 sm:text-lg">
                To provide healthcare professionals with innovative, reliable, and cost-effective
                medical devices that contribute to better patient outcomes and support excellence in
                healthcare.
              </p>
            </article>

            <article className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-400/15 text-accent-700 transition group-hover:bg-accent-400 group-hover:text-brand-900">
                <Eye className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mt-7 text-2xl font-bold text-gray-900">Our Vision</h3>
              <p className="mt-4 text-base leading-8 text-gray-600 sm:text-lg">
                To become a trusted leader in the medical device industry by delivering exceptional
                products, outstanding customer service, and lasting partnerships with healthcare
                organizations.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-700">What defines us</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">Our Core Values</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              The principles behind every product we select, every recommendation we make, and every
              relationship we build.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ title, description, icon: Icon }, index) => (
              <article
                key={title}
                className={`rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:border-accent-300 hover:shadow-lg ${
                  index === values.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/10 text-brand-700">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">{title}</h3>
                <p className="mt-3 leading-7 text-gray-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-brand-800 px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="absolute inset-x-0 top-0 h-1 bg-accent-400" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl">
            <HeartPulse className="mx-auto h-10 w-10 text-accent-300" aria-hidden="true" />
            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">Supporting better care, together</h2>
            <p className="mt-5 text-lg leading-8 text-white/80">
              At Baraka, we believe that access to quality medical technology plays a vital role in
              improving lives. We are proud to support healthcare professionals with solutions they
              can trust and service they can rely on.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
