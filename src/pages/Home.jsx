import { Link } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  Boxes,
  Headset,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Truck,
} from 'lucide-react';

const categories = [
  {
    title: 'Diagnostic equipment',
    description: 'Instruments that support accurate, confident assessment.',
    icon: Stethoscope,
  },
  {
    title: 'Patient monitoring',
    description: 'Dependable monitoring solutions for continuous care.',
    icon: Activity,
  },
  {
    title: 'Surgical instruments',
    description: 'Precision tools built to consistent quality standards.',
    icon: Syringe,
  },
  {
    title: 'Medical consumables',
    description: 'Everyday essentials, available and reliably stocked.',
    icon: Boxes,
  },
];

const commitments = [
  {
    title: 'Recognized standards',
    description:
      'We work with trusted manufacturers and suppliers, and select products that meet recognized quality and safety standards.',
    icon: ShieldCheck,
  },
  {
    title: 'Technical expertise',
    description:
      'Our team advises on the right solution for your setting and stays involved through every stage of the purchase.',
    icon: Headset,
  },
  {
    title: 'Timely service',
    description:
      'Responsive supply and clear communication, so clinical teams are never left waiting on essentials.',
    icon: Truck,
  },
];

const Home = () => {
  return (
    <div className="pt-24">
      {/* Hero image */}
      <section className="relative isolate flex min-h-[calc(100svh-5rem)] items-center border-b border-gray-200 bg-brand-50">
        <img
          src="/hero.png"
          alt="A clinician in a white coat reviewing patient information on a tablet in a hospital corridor."
          className="absolute inset-0 h-full w-full object-cover object-center sm:object-right"
          width="1699"
          height="892"
          fetchPriority="high"
          decoding="async"
        />
        {/* Scrim: the artwork is light on the left, so the copy is dark and
            the gradient only reinforces the existing contrast. */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/20 sm:via-white/75 sm:to-transparent"
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-md sm:max-w-lg">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
              <span className="h-px w-8 bg-accent-400" aria-hidden="true" />
              Baraka Medical Devices
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-brand-900 sm:text-5xl lg:text-6xl">
              Equipping better care, every day
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-700 sm:text-lg sm:leading-8">
              Medical devices, monitoring solutions and consumables for hospitals, clinics,
              laboratories and pharmacies across Qatar.
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div>
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                <span className="h-px w-8 bg-accent-400" aria-hidden="true" />
                Medical devices, Doha
              </p>

              <h2 className="mt-7 text-3xl font-bold leading-[1.15] tracking-tight text-gray-900 sm:text-4xl">
                Quality medical devices for the people who rely on them
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                Baraka supplies hospitals, clinics, laboratories and pharmacies with dependable
                equipment and consumables, backed by technical guidance and responsive support.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-brand-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                >
                  Request a quote
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 font-semibold text-gray-800 transition-colors hover:border-brand-600 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                >
                  About us
                </Link>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                  What we supply
                </p>
                <ul className="mt-7 divide-y divide-gray-200">
                  {categories.map(({ title, description, icon: Icon }) => (
                    <li key={title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
                      <div>
                        <p className="font-semibold text-gray-900">{title}</p>
                        <p className="mt-1 text-sm leading-6 text-gray-600">{description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              A supplier your team can plan around
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Reliable products and steady service, so clinical decisions are never limited by
              what is on the shelf.
            </p>
          </div>

          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {commitments.map(({ title, description, icon: Icon }) => (
              <div key={title} className="border-t border-gray-200 pt-7">
                <Icon className="h-6 w-6 text-brand-600" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-bold text-gray-900">{title}</h3>
                <p className="mt-2 leading-7 text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="relative overflow-hidden border-t border-gray-200 bg-gray-50">
        <div
          className="absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-100/70 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-50 blur-2xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="relative overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-[0_20px_60px_-32px_rgba(28,67,91,0.28)] sm:rounded-3xl">
            <div
              className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-brand-400 to-brand-700"
              aria-hidden="true"
            />

            <div className="grid gap-8 px-7 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16 lg:px-14 lg:py-14">
              <div className="max-w-2xl">
                <p className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
                  Here when you need us
                </p>
                <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Let’s find the right solution for your facility
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                  Tell us what you need and our team will come back with suitable options, clear
                  pricing and current availability.
                </p>
              </div>

              <div className="lg:text-right">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-brand-600 px-7 py-3.5 font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                >
                  Talk to our team
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-white/15">
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
