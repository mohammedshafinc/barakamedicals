import {
  Activity,
  ArrowRight,
  Boxes,
  Check,
  ChevronDown,
  Headphones,
  Mail,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Stethoscope,
  Truck,
} from 'lucide-react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 'diagnostics',
    title: 'Clarity for every decision.',
    description:
      'Reliable diagnostic instruments selected to help clinical teams assess with confidence and work without unnecessary delays.',
    image: '/hero2.png',
    alt: 'Medical diagnostic and monitoring equipment in a bright clinical setting.',
  },
  {
    id: 'monitoring',
    title: 'Stay informed at every moment.',
    description:
      'Dependable monitoring solutions for continuous care, with practical guidance to help your team choose the right configuration.',
    image: '/hero.png',
    alt: 'Clinician reviewing healthcare information on a tablet.',
  },
  {
    id: 'consumables',
    title: 'Everyday essentials, always ready.',
    description:
      'Consistent access to the items your teams use every day, supported by responsive communication and straightforward ordering.',
    image:
      'https://cdn.sceneai.art/Hero%20Section%20Video/802fa01f-44ef-4ab4-ac73-62015fe06eef.png',
    alt: 'Healthcare professional working in a modern clinical environment.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Tell us what you need',
    description: 'Share your requirements, quantities and preferred timeline with our team.',
    icon: Mail,
  },
  {
    number: '02',
    title: 'Review suitable options',
    description: 'We identify appropriate products and provide clear availability and pricing.',
    icon: Stethoscope,
  },
  {
    number: '03',
    title: 'Confirm and receive',
    description: 'Once approved, we coordinate supply and keep you informed through delivery.',
    icon: Truck,
  },
];

const faqs = [
  {
    question: 'What types of medical products do you supply?',
    answer:
      'Our focus includes diagnostic equipment, patient monitoring solutions, surgical instruments and frequently used medical consumables for hospitals, clinics, laboratories and pharmacies.',
  },
  {
    question: 'Can you help us select the right equipment?',
    answer:
      'Yes. Share your clinical setting and requirements, and our team will help narrow down suitable options before you make a purchasing decision.',
  },
  {
    question: 'Do you serve facilities across Qatar?',
    answer:
      'Baraka Medical Devices is based in Doha and supports healthcare facilities across Qatar. Contact us with your location and requirements so we can confirm service details.',
  },
  {
    question: 'How do I request pricing and availability?',
    answer:
      'Use the request-a-quote button or contact our team directly. Include the product, quantity and desired timeline where possible for a faster response.',
  },
];

function AnimatedLine({ text, startDelay }) {
  return (
    <span aria-hidden="true">
      {text.split(' ').map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="word-reveal mr-[0.24em] last:mr-0"
          style={{ '--word-delay': `${startDelay + index * 75}ms` }}
        >
          {word}
        </span>
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
            <p className="text-sm font-medium text-slate-900">Diagnostic requirement</p>
          </div>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#e9f0e4] text-[#476042]">
            <Stethoscope className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-[10px] text-slate-500">
          {['Facility', 'Quantity', 'Timeline'].map((label) => (
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
            <p className="text-sm font-medium text-slate-900">Configuration overview</p>
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
          <p className="text-sm font-medium text-slate-900">Everyday essentials</p>
        </div>
        <Boxes className="h-5 w-5 text-[#976c54]" aria-hidden="true" />
      </div>
      <div className="mt-4 space-y-2">
        {['Consumables', 'Clinical essentials', 'Facility supplies'].map((label, index) => (
          <div key={label} className="flex items-center justify-between rounded-lg bg-[#f4f1e9] px-3 py-2 text-[10px] text-slate-600">
            <span>{label}</span>
            <span className="flex items-center gap-1 text-[#527c5c]">
              <Check className="h-3 w-3" aria-hidden="true" />
              {index === 0 ? 'Requested' : 'Available'}
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
          Discuss your requirements
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

const Home = () => {
  return (
    <div className="bg-[#f4f1e9] text-slate-950">
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#dcebed] text-white">
        <div className="hero-aurora" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,25,22,0.38)_0%,rgba(10,25,22,0.16)_48%,rgba(10,25,22,0.03)_82%),linear-gradient(180deg,rgba(7,20,22,0.24)_0%,transparent_30%,rgba(7,18,14,0.32)_100%)]"
          aria-hidden="true"
        />

        <div className="page-reveal relative mx-auto w-full max-w-[1340px] px-5 py-32 sm:px-8 sm:py-36 lg:px-10 xl:px-8">
          <div className="mx-auto max-w-[36rem] text-center">
            <h1
              className="font-serif text-[46px] font-normal leading-[0.98] tracking-[-0.045em] sm:text-[64px] lg:text-[76px]"
              aria-label="Equipping better care, every day"
            >
              <span className="block sm:whitespace-nowrap">
                <AnimatedLine text="Equipping better" startDelay={180} />
              </span>
              <span className="block sm:whitespace-nowrap">
                <AnimatedLine text="care, every day." startDelay={430} />
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-md text-[15px] leading-7 text-white/75 sm:text-base">
              Medical devices, monitoring solutions and consumables for hospitals, clinics,
              laboratories and pharmacies across Qatar.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <ArrowLink to="/contact" light>Request a quote</ArrowLink>
              <Link
                to="/about"
                className="inline-flex items-center rounded-full border border-white/40 bg-white/5 px-5 py-3 text-[13px] font-medium text-white backdrop-blur transition-colors hover:bg-white/15"
              >
                About Baraka
              </Link>
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
            We pair quality-focused products with practical guidance and responsive service, so
            your team can stay focused on patients.
          </p>
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
              A dependable partner for the products your team relies on.
            </h2>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3 md:items-stretch">
            <div className="rounded-[2rem] bg-[#b9cbb9] p-7 md:mt-16">
              <ShieldCheck className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-16 font-serif text-2xl">Recognized standards</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Quality and safety guide how products are selected.
              </p>
            </div>

            <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-slate-900">
              <img src="/hero2.png" alt="Clinical equipment arranged in a modern medical setting." className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <p className="font-serif text-3xl">Clear guidance from enquiry to delivery.</p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#d7c7b7] p-7 md:mt-10 md:mb-6">
              <Headphones className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-16 font-serif text-2xl">Responsive service</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Straightforward communication and practical follow-through.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-28 sm:px-8 sm:py-40">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="max-w-md">
            <h2 className="font-serif text-4xl leading-[1.06] tracking-[-0.04em] sm:text-5xl">
              Based in Doha. Ready to support your facility.
            </h2>
            <p className="mt-5 text-[15px] leading-7 text-slate-600">
              Share your requirements and our team will respond with suitable options, clear
              pricing and current availability.
            </p>
            <div className="mt-7"><ArrowLink to="/contact">Contact our team</ArrowLink></div>
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
                <p className="flex items-center gap-2"><Check className="h-4 w-4 text-[#66816a]" /> Availability updates</p>
                <p className="flex items-center gap-2"><Check className="h-4 w-4 text-[#66816a]" /> Delivery coordination</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-28 bg-[#ebe4d9] px-5 py-28 sm:px-8 sm:py-36">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-4xl tracking-[-0.04em] sm:text-6xl">Simple from the first conversation.</h2>
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
          <img src="/hero2.png" alt="Medical equipment prepared in a bright clinical environment." className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
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
