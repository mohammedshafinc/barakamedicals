import {
  Activity,
  ArrowRight,
  Boxes,
  Check,
  ChevronDown,
  ClipboardCheck,
  Headphones,
  Mail,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Stethoscope,
  Truck,
} from 'lucide-react';
import { Fragment } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta';

const products = [
  {
    id: 'diagnostics',
    title: 'Clarity for every diagnosis.',
    description:
      'Diagnostic and imaging equipment selected for accuracy and reliability, helping clinical teams in Qatar assess with confidence and avoid unnecessary delays.',
    image: '/hero2.webp',
    alt: 'Diagnostic medical equipment arranged in a modern clinical room.',
  },
  {
    id: 'monitoring',
    title: 'Continuous insight, around the clock.',
    description:
      'Patient monitoring systems for wards, theatres and critical care, supplied with practical guidance so you choose the right configuration first time.',
    image: '/hero.webp',
    alt: 'Clinician reviewing patient monitoring readings at the bedside.',
  },
  {
    id: 'consumables',
    title: 'Everyday essentials, always in stock.',
    description:
      'Dependable supply of the medical consumables your teams use daily, backed by responsive communication and straightforward reordering.',
    image: '/consumabkes.webp',
    alt: 'Medical consumables and clinical supplies prepared for distribution.',
  },
];

const specialities = [
  {
    title: 'Rehabilitation Equipment',
    description:
      'Mobility aids, therapy equipment and support products that help patients regain strength and independence.',
    image: '/rehab.webp',
    alt: 'Physiotherapist supporting a patient using rehabilitation equipment.',
    position: 'center',
  },
  {
    title: 'ENT & Audiology',
    description:
      'Diagnostic and treatment devices for ear, nose, throat and hearing care specialists.',
    image: '/ent.jpg',
    alt: 'ENT and audiology diagnostic instruments in a specialist clinic.',
    position: 'center center',
  },
  {
    title: 'Diagnostics & Imaging',
    description:
      'Accurate diagnostic instruments and imaging systems for hospitals, clinics and laboratories.',
    image: '/hero2.webp',
    alt: 'Diagnostic imaging equipment in a hospital examination room.',
    position: 'center',
  },
  {
    title: 'Patient Monitoring',
    description:
      'Vital signs monitors and continuous monitoring systems for wards, theatres and critical care.',
    image: '/hero.webp',
    alt: 'Patient monitor displaying vital signs beside a hospital bed.',
    position: 'right center',
  },
  {
    title: 'Medical Consumables',
    description:
      'Essential day-to-day supplies with dependable availability and responsive restocking.',
    image: '/consumabkes.webp',
    alt: 'Boxes of medical consumables and disposable clinical supplies.',
    position: 'right center',
  },
  {
    title: 'Biomedical Engineering',
    description:
      'Installation, calibration, servicing and lifecycle support for your medical equipment.',
    image: '/bio.webp',
    alt: 'Biomedical engineer servicing medical equipment electronics.',
    position: 'center',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Send us your requirements',
    description: 'Share the products, quantities and timeline your facility needs.',
    icon: Mail,
  },
  {
    number: '02',
    title: 'Receive a clear quotation',
    description: 'We confirm specifications, current availability and transparent pricing.',
    icon: ClipboardCheck,
  },
  {
    number: '03',
    title: 'Delivered to your facility',
    description: 'Once approved, we coordinate supply, delivery and installation support.',
    icon: Truck,
  },
];

const faqs = [
  {
    question: 'What medical devices do you supply in Qatar?',
    answer:
      'Baraka Medical Solutions supplies diagnostic and imaging equipment, patient monitoring systems, rehabilitation equipment, ENT and audiology devices, surgical instruments and medical consumables to hospitals, clinics, laboratories and pharmacies across Qatar.',
  },
  {
    question: 'Do you deliver medical equipment across Doha and Qatar?',
    answer:
      'Yes. We are based in Doha and deliver to healthcare facilities throughout Qatar. Share your location and requirements and we will confirm delivery timelines with your quotation.',
  },
  {
    question: 'Are your medical devices certified and compliant?',
    answer:
      'We supply products from established manufacturers and prioritise internationally recognised quality and safety standards, including CE marking and ISO certification. Certification documents can be provided for any product on request.',
  },
  {
    question: 'Do you provide installation and after-sales support?',
    answer:
      'Yes. Our biomedical engineering team supports installation, calibration, servicing and spare parts, so your equipment stays reliable throughout its working life.',
  },
  {
    question: 'How do I request a quotation?',
    answer:
      'Use the request a quote button, message us on WhatsApp or email info@barakamedicals.com. Include the product, quantity and required delivery date where possible so we can respond quickly.',
  },
];

function AnimatedLine({ text, startDelay }) {
  // The space between words is rendered as a real text node rather than a
  // margin. React emits no whitespace between mapped siblings, and a browser
  // can only break a line at actual whitespace, so margin-based gaps would
  // make the whole heading one unbreakable run that overflows its container.
  return (
    <span aria-hidden="true">
      {text.split(' ').map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          {index > 0 && ' '}
          <span
            className="word-reveal"
            style={{ '--word-delay': `${startDelay + index * 75}ms` }}
          >
            {word}
          </span>
        </Fragment>
      ))}
    </span>
  );
}

function ArrowLink({ children, to, light = false }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2 rounded-full px-5 py-3 text-[13px] font-medium transition-all hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
        light
          ? 'bg-white text-slate-950 focus-visible:outline-white'
          : 'bg-slate-950 text-white focus-visible:outline-slate-950'
      }`}
    >
      {children}
      <ArrowRight
        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  );
}

function ProductPanel({ id }) {
  if (id === 'diagnostics') {
    return (
      <div className="absolute left-1/2 top-1/2 w-[78%] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-[0_24px_70px_-24px_rgba(15,23,42,0.55)] backdrop-blur sm:p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-slate-900">Diagnostic range</p>
          </div>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#e9f0e4] text-[#476042]">
            <Stethoscope className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-[10px] text-slate-500">
          {['Imaging', 'Laboratory', 'Examination'].map((label) => (
            <div key={label} className="rounded-lg bg-[#f4f1e9] px-2.5 py-2.5">
              {label}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (id === 'monitoring') {
    return (
      <div className="absolute left-1/2 top-1/2 w-[78%] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-[0_24px_70px_-24px_rgba(15,23,42,0.55)] backdrop-blur sm:p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-900">Vital signs monitoring</p>
          </div>
          <Activity className="h-5 w-5 text-[#527c78]" aria-hidden="true" />
        </div>
        <svg className="mt-4 h-14 w-full" viewBox="0 0 320 56" fill="none" aria-hidden="true">
          <path d="M0 35h47l12-19 18 33 16-25 13 11h44l14-20 18 34 17-24 12 10h109" stroke="#6d9690" strokeWidth="2" />
          <path d="M0 48h320" stroke="#e2e8e5" strokeWidth="1" />
        </svg>
      </div>
    );
  }

  return (
    <div className="absolute left-1/2 top-1/2 w-[78%] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-[0_24px_70px_-24px_rgba(15,23,42,0.55)] backdrop-blur sm:p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-900">Stock availability</p>
        </div>
        <Boxes className="h-5 w-5 text-[#976c54]" aria-hidden="true" />
      </div>
      <div className="mt-4 space-y-2">
        {['Examination gloves', 'Wound care', 'Syringes & needles'].map((label, index) => (
          <div key={label} className="flex items-center justify-between rounded-lg bg-[#f4f1e9] px-3 py-2 text-[10px] text-slate-600">
            <span>{label}</span>
            <span className="flex items-center gap-1 text-[#527c5c]">
              <Check className="h-3 w-3" aria-hidden="true" />
              {index === 0 ? 'In stock' : 'Available'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductFeature({ product, reverse }) {
  return (
    <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
      <div className={reverse ? 'lg:order-2' : ''}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#d8d5c8] sm:rounded-[2.5rem]">
          <img
            src={product.image}
            alt={product.alt}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-slate-950/10" aria-hidden="true" />
          <ProductPanel id={product.id} />
        </div>
      </div>

      <div className={`max-w-md ${reverse ? 'lg:order-1 lg:justify-self-end' : ''}`}>
        <h3 className="font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-slate-950 sm:text-5xl">
          {product.title}
        </h3>
        <p className="mt-5 text-[15px] leading-7 text-slate-600">{product.description}</p>
        <Link
          to="/contact"
          className="group mt-6 inline-flex items-center gap-2 text-[13px] font-medium text-slate-950"
        >
          Request a quote
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

const Home = () => {
  useDocumentMeta({
    title: 'Medical Devices Supplier in Qatar | Baraka Medical Solutions Doha',
    description:
      'Baraka Medical Solutions is a leading medical device supplier in Doha, Qatar. Diagnostic equipment, patient monitoring, rehabilitation devices, ENT and medical consumables with fast quotes and nationwide delivery.',
    path: '/',
  });

  return (
    <div className="bg-[#f4f1e9] text-slate-950">
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#dcebed] text-white">
        <div className="hero-aurora" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,25,22,0.62)_0%,rgba(10,25,22,0.42)_38%,rgba(10,25,22,0.12)_70%,rgba(10,25,22,0.04)_100%),linear-gradient(180deg,rgba(7,20,22,0.26)_0%,transparent_32%,rgba(7,18,14,0.34)_100%)]"
          aria-hidden="true"
        />

        <div className="page-reveal relative mx-auto w-full max-w-[1340px] px-5 py-28 sm:px-8 sm:py-32 lg:px-10 xl:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 xl:gap-20">
            <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
              <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-white/70">
                Medical Device Supplier · Doha, Qatar
              </p>

              <h1
                className="mt-5 text-balance font-serif text-[34px] font-normal leading-[1.06] tracking-[-0.035em] sm:text-[44px] lg:text-[40px] xl:text-[50px] 2xl:text-[56px]"
                aria-label="Reliable Medical Device Solutions for Qatar’s Healthcare Sector"
              >
                <AnimatedLine
                  text="Reliable Medical Device Solutions for Qatar’s Healthcare Sector"
                  startDelay={180}
                />
              </h1>

              <p className="mt-6 text-[15px] leading-7 text-white/80 sm:text-base">
                Baraka Medical Solutions supplies medical devices, equipment and consumables to
                hospitals, clinics, laboratories and pharmacies across Qatar — with dependable
                sourcing, delivery and professional support.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                <ArrowLink to="/contact" light>Request a Quote</ArrowLink>
                <a
                  href="#specialities"
                  className="inline-flex items-center rounded-full border border-white/40 bg-white/5 px-5 py-3 text-[13px] font-medium text-white backdrop-blur transition-colors hover:bg-white/15"
                >
                  Explore Our Solutions
                </a>
              </div>

              <ul className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-2.5 text-[12px] text-white/70 lg:justify-start">
                <li className="inline-flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-[#c5dd8f]" aria-hidden="true" />
                  CE &amp; ISO certified products
                </li>
                <li className="inline-flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-[#c5dd8f]" aria-hidden="true" />
                  Delivery across Qatar
                </li>
                <li className="inline-flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-[#c5dd8f]" aria-hidden="true" />
                  Installation &amp; servicing
                </li>
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-slate-900/40 shadow-[0_40px_90px_-30px_rgba(8,24,20,0.65)] ring-1 ring-white/25 sm:rounded-[1.75rem]">
                <img
                  src="/hero2.webp"
                  alt="Diagnostic and patient monitoring equipment supplied by Baraka Medical Solutions in a clinical setting in Doha, Qatar."
                  className="h-full w-full object-cover"
                  width="1600"
                  height="854"
                  fetchPriority="high"
                  decoding="async"
                />
                <div
                  className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(8,22,19,0.55)_100%)]"
                  aria-hidden="true"
                />
              </div>

              <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-white/25 bg-[#12261f]/80 px-5 py-4 backdrop-blur sm:left-6 sm:right-auto sm:max-w-[19rem]">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/15">
                    <PackageCheck className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[13px] font-medium leading-tight text-white">
                      Genuine, quality-assured equipment
                    </p>
                    <p className="mt-1 text-[11px] leading-tight text-white/65">
                      Sourced from established manufacturers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-28 text-center sm:px-8 sm:py-36">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-4xl leading-[1.08] tracking-[-0.035em] sm:text-6xl">
            Medical equipment that keeps care moving.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-slate-600">
            We pair quality-assured products from trusted manufacturers with practical guidance and
            responsive service, so your team can stay focused on patients.
          </p>
        </div>
      </section>

      <section
        id="specialities"
        className="scroll-mt-28 px-5 pb-28 sm:px-8 sm:pb-40"
        aria-labelledby="specialities-heading"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-5xl">
            <h2
              id="specialities-heading"
              className="font-sans text-[12px] font-medium uppercase tracking-[0.48em] text-[#b67a32]"
            >
              Our Specialities
            </h2>
            <p className="mt-7 max-w-5xl text-[15px] leading-7 text-slate-600 sm:text-base">
              Our product range brings together dependable medical devices, practical expertise and
              responsive support. From rehabilitation and ENT to diagnostics, patient monitoring,
              consumables and biomedical engineering, we help healthcare teams across Qatar equip
              their facilities and deliver better patient outcomes.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {specialities.map(({ title, description, image, alt, position }) => (
              <article
                key={title}
                className="group relative isolate min-h-[280px] overflow-hidden rounded-[1.25rem] bg-slate-900 sm:aspect-[4/3] sm:min-h-0"
              >
                <img
                  src={image}
                  alt={alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  style={{ objectPosition: position }}
                  loading="lazy"
                  decoding="async"
                />
                <div
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.04)_20%,rgba(15,23,42,0.30)_58%,rgba(15,23,42,0.92)_100%)]"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
                  <h3 className="font-sans text-xl font-medium tracking-[-0.02em]">{title}</h3>
                  <p className="mt-2 line-clamp-2 text-[13px] leading-5 text-white/75">
                    {description}
                  </p>
                  <Link
                    to="/contact"
                    className="group/link mt-5 inline-flex items-center gap-2 text-[12px] font-medium text-white"
                    aria-label={`Request a quote for ${title}`}
                  >
                    Request a quote
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="scroll-mt-28 px-5 pb-28 sm:px-8 sm:pb-40">
        <div className="mx-auto max-w-[1180px] space-y-28 sm:space-y-40">
          {products.map((product, index) => (
            <ProductFeature key={product.id} product={product} reverse={index % 2 === 1} />
          ))}
        </div>
      </section>

      <section id="why-baraka" className="scroll-mt-28 overflow-hidden bg-[#e5ebe2] px-5 py-28 sm:px-8 sm:py-36">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-4xl leading-[1.06] tracking-[-0.04em] sm:text-6xl">
              The supply partner healthcare teams in Qatar rely on.
            </h2>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3 md:items-stretch">
            <div className="rounded-[2rem] bg-[#b9cbb9] p-7 md:mt-16">
              <ShieldCheck className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-16 font-serif text-2xl">Certified quality</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Products chosen against recognised safety and quality standards.
              </p>
            </div>

            <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-slate-900">
              <img src="/consumabkes.webp" alt="Medical supplies and equipment prepared for delivery to a hospital in Doha." className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <p className="font-serif text-3xl">Genuine products, ready when you need them.</p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#d7c7b7] p-7 md:mt-10 md:mb-6">
              <Headphones className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-16 font-serif text-2xl">Responsive service</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Fast quotations, clear communication and dependable follow-through.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-28 sm:px-8 sm:py-40">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="max-w-md">
            <h2 className="font-serif text-4xl leading-[1.06] tracking-[-0.04em] sm:text-5xl">
              Based in Doha. Supplying all of Qatar.
            </h2>
            <p className="mt-5 text-[15px] leading-7 text-slate-600">
              Send us your requirements and our team will respond with suitable products, clear
              pricing and current availability.
            </p>
            <div className="mt-7"><ArrowLink to="/contact">Request a quote</ArrowLink></div>
          </div>

          <div className="relative min-h-[480px] overflow-hidden rounded-[2.5rem] bg-[#dce7e9] p-6 sm:p-10">
            <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_center,#77949a_1.2px,transparent_1.2px)] [background-size:22px_22px]" aria-hidden="true" />
            <div className="absolute left-[14%] top-[20%] h-24 w-40 rotate-[-8deg] rounded-full bg-[#bfd0c4] blur-xl" aria-hidden="true" />
            <div className="absolute bottom-[18%] right-[12%] h-32 w-48 rotate-12 rounded-full bg-[#c7b9a9] blur-xl" aria-hidden="true" />

            <div className="relative mx-auto mt-20 max-w-sm rounded-3xl border border-white/70 bg-white/90 p-6 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.4)] backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#e5ebe2]">
                  <MapPin className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-medium">Doha, Qatar</p>
                </div>
              </div>
              <div className="my-5 h-px bg-slate-200" />
              <div className="space-y-3 text-sm text-slate-600">
                <p className="flex items-center gap-2"><Check className="h-4 w-4 text-[#66816a]" /> Product guidance</p>
                <p className="flex items-center gap-2"><Check className="h-4 w-4 text-[#66816a]" /> Fast quotations</p>
                <p className="flex items-center gap-2"><Check className="h-4 w-4 text-[#66816a]" /> Nationwide delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-28 bg-[#ebe4d9] px-5 py-28 sm:px-8 sm:py-36">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-4xl tracking-[-0.04em] sm:text-6xl">Simple from the first enquiry.</h2>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {processSteps.map(({ number, title, description, icon: Icon }) => (
              <article key={number} className="flex min-h-[330px] flex-col rounded-[2rem] border border-slate-950/10 bg-[#f8f5ef] p-7">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">{number}</span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-slate-300">
                    <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-auto">
                  <h3 className="font-serif text-3xl tracking-[-0.03em]">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-28 px-5 py-28 sm:px-8 sm:py-36">
        <div className="mx-auto grid max-w-[1000px] gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
          <div>
            <h2 className="font-serif text-4xl tracking-[-0.04em] sm:text-5xl">Useful answers, clearly stated.</h2>
          </div>
          <div className="border-t border-slate-300">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group border-b border-slate-300 py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[15px] font-medium marker:content-none">
                  {question}
                  <ChevronDown className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="max-w-xl pb-6 pr-8 text-sm leading-7 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-4 sm:px-6 sm:pb-6">
        <div className="relative mx-auto min-h-[560px] max-w-[1340px] overflow-hidden rounded-[2.5rem] bg-slate-950 sm:rounded-[3rem]">
          <img src="/rehab.webp" alt="Healthcare professional supporting a patient using rehabilitation equipment." className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-slate-950/55" />
          <div className="relative flex min-h-[560px] items-center justify-center px-5 py-20 text-center text-white">
            <div className="max-w-3xl">
              <PackageCheck className="mx-auto h-8 w-8" strokeWidth={1.3} aria-hidden="true" />
              <h2 className="mt-7 font-serif text-4xl leading-[1.02] tracking-[-0.045em] sm:text-6xl">
                Let’s equip better care together.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-white/70">
                Tell us what your facility needs and we’ll come back with suitable options,
                straightforward pricing and current availability.
              </p>
              <div className="mt-7"><ArrowLink to="/contact" light>Request a quote</ArrowLink></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
