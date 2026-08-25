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
    id: 'digital-care-platforms',
    title: 'Connected care, designed around people.',
    description:
      'Patient portals, EMR workflows and engagement platforms that make access, communication and coordinated care simpler.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85',
    alt: 'Healthcare software dashboard displaying connected care insights.',
  },
  {
    id: 'cloud-cybersecurity',
    title: 'A secure foundation for every service.',
    description:
      'Resilient cloud architecture, identity controls and cybersecurity programs built to protect healthcare operations and sensitive data.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=85',
    alt: 'Secure cloud infrastructure in a modern data center.',
  },
  {
    id: 'data-interoperability',
    title: 'Turn connected data into better decisions.',
    description:
      'Standards-based integrations, analytics and information flows that connect clinical, operational and patient-facing systems.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85',
    alt: 'Analytics interface visualizing integrated healthcare data.',
  },
];

const specialities = [
  {
    title: 'Clinical IT Infrastructure',
    description: 'Secure, reliable technology foundations designed around clinical operations, compliance and patient care.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85',
    alt: 'Digital analytics dashboard displayed on a computer screen.',
    position: 'center',
  },
  {
    title: 'Care Coordination Systems',
    description: 'Digital platforms that streamline information sharing and keep care teams aligned.',
    image: '/hero.png',
    alt: 'Healthcare team reviewing digital information on a tablet.',
    position: 'right center',
  },
  {
    title: 'Healthcare CRM',
    description: 'Patient relationship tools for managing enquiries, engagement, communications and service journeys.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85',
    alt: 'Team collaborating around a digital customer relationship platform.',
    position: 'center',
  },
  {
    title: 'Healthcare ERP',
    description: 'Integrated systems for finance, operations, workforce, resource planning and performance management.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85',
    alt: 'Business intelligence dashboard showing operational data.',
    position: 'center',
  },
  {
    title: 'Electronic Medical Records',
    description: 'Structured, accessible clinical records that improve documentation, continuity and informed decisions.',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=85',
    alt: 'Healthcare professional working with digital clinical records.',
    position: 'center',
  },
  {
    title: 'Data & System Integration',
    description: 'Interoperability, analytics and connected workflows that bring healthcare systems and data together.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85',
    alt: 'Secure server infrastructure supporting connected digital systems.',
    position: 'center',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Discover the opportunity',
    description: 'We map your goals, users, current systems, risks and measures of success.',
    icon: Mail,
  },
  {
    number: '02',
    title: 'Design the right solution',
    description: 'Together, we define the architecture, roadmap and implementation priorities.',
    icon: Stethoscope,
  },
  {
    number: '03',
    title: 'Implement and support',
    description: 'We deliver, integrate and optimize your platform with responsive local support.',
    icon: Truck,
  },
];

const faqs = [
  {
    question: 'Which solutions do you provide?',
    answer:
      'We cover digital strategy, CRM, ERP, EMR, patient engagement, cloud, cybersecurity, analytics and standards-based system integration.',
  },
  {
    question: 'Can you work with our existing systems?',
    answer:
      'Yes. We begin by understanding your current applications, infrastructure and workflows, then design an integration or modernization path that protects continuity.',
  },
  {
    question: 'Do you support healthcare organizations across Qatar?',
    answer:
      'Baraka Medical Solutions is based in Doha and supports healthcare organizations across Qatar with discovery, implementation and ongoing technical support.',
  },
  {
    question: 'How do we start a project?',
    answer:
      'Book a consultation and share your goals, current environment and preferred timeline. We will arrange a discovery conversation and recommend practical next steps.',
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
  if (id === 'digital-care-platforms') {
    return (
      <div className="absolute left-1/2 top-1/2 w-[78%] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-[0_24px_70px_-24px_rgba(15,23,42,0.55)] backdrop-blur sm:p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-slate-900">Digital care journey</p>
          </div>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#e9f0e4] text-[#476042]">
            <Stethoscope className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-[10px] text-slate-500">
          {['Patient portal', 'EMR workflow', 'Engagement'].map((label) => (
            <div key={label} className="rounded-lg bg-[#f4f1e9] px-2.5 py-2.5">
              {label}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (id === 'cloud-cybersecurity') {
    return (
      <div className="absolute left-1/2 top-1/2 w-[78%] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-[0_24px_70px_-24px_rgba(15,23,42,0.55)] backdrop-blur sm:p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-900">Secure cloud operations</p>
          </div>
          <ShieldCheck className="h-5 w-5 text-[#527c78]" aria-hidden="true" />
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
          <p className="text-sm font-medium text-slate-900">Interoperability hub</p>
        </div>
        <Boxes className="h-5 w-5 text-[#976c54]" aria-hidden="true" />
      </div>
      <div className="mt-4 space-y-2">
        {['Clinical systems', 'Operational data', 'Patient services'].map((label, index) => (
          <div key={label} className="flex items-center justify-between rounded-lg bg-[#f4f1e9] px-3 py-2 text-[10px] text-slate-600">
            <span>{label}</span>
            <span className="flex items-center gap-1 text-[#527c5c]">
              <Check className="h-3 w-3" aria-hidden="true" />
              {index === 0 ? 'Connected' : 'Synchronized'}
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
          Discuss your project
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
              aria-label="Technology that moves care forward"
            >
              <span className="block sm:whitespace-nowrap">
                <AnimatedLine text="Technology that" startDelay={180} />
              </span>
              <span className="block sm:whitespace-nowrap">
                <AnimatedLine text="moves care forward." startDelay={430} />
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-md text-[15px] leading-7 text-white/75 sm:text-base">
              Strategy, platforms, cloud, cybersecurity and integration for healthcare organizations
              across Qatar.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <ArrowLink to="/contact" light>Book a consultation</ArrowLink>
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
            Digital foundations for connected, resilient care.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-slate-600">
            We align technology with clinical and operational priorities, then implement and support
            systems that help your teams work securely and confidently.
          </p>
        </div>
      </section>

      <section
        id="specialities"
        className="scroll-mt-28 px-5 pb-28 sm:px-8 sm:pb-40"
        aria-labelledby="specialities-heading"
      >
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-8 border-b border-slate-900/15 pb-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-16 lg:pb-12">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.42em] text-[#b67a32]">
                Focused capabilities
              </p>
              <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
                Healthcare IT services shaped around your clinical and operational needs.
              </p>
            </div>
            <div>
              <h2
                id="specialities-heading"
                className="max-w-3xl font-serif text-4xl leading-[1.04] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-[3.5rem]"
              >
                Digital solutions for smarter healthcare operations.
              </h2>
              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-600">
                From infrastructure and patient engagement to CRM, ERP and interoperable data,
                we build the systems that help healthcare organizations work better.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-12">
            {specialities.slice(0, 2).map(({ title, description, image, alt, position }, index) => (
              <article
                key={title}
                className={`group relative isolate min-h-[390px] overflow-hidden rounded-[2rem] bg-slate-900 sm:min-h-[460px] ${
                  index === 0 ? 'lg:col-span-7' : 'lg:col-span-5'
                }`}
              >
                <img
                  src={image}
                  alt={alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  style={{ objectPosition: position }}
                  loading="lazy"
                  decoding="async"
                />
                <div
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,22,27,0.10)_0%,rgba(10,22,27,0.14)_35%,rgba(10,22,27,0.92)_100%)]"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6 text-white sm:p-8">
                  <span className="text-[10px] font-medium uppercase tracking-[0.34em] text-white/70">
                    Core speciality
                  </span>
                  <span className="border border-white/35 px-2.5 py-1.5 text-[10px] font-medium text-white/80">
                    0{index + 1}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                  <h3 className="max-w-md font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-md text-[13px] leading-6 text-white/75 sm:text-sm">
                    {description}
                  </p>
                  <Link
                    to="/contact"
                    className="group/link mt-5 inline-flex items-center gap-2 text-[12px] font-medium text-white"
                    aria-label={`Discuss ${title} requirements`}
                  >
                    Discuss your project
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {specialities.slice(2).map(({ title, description, image, alt, position }, index) => {
              const SpecialtyIcon = [Boxes, Activity, PackageCheck, Stethoscope][index];
              const cardTone = ['bg-[#dce7e9]', 'bg-[#e5ebe2]', 'bg-[#eadfd4]', 'bg-[#e9e5d9]'][index];

              return (
                <article
                  key={title}
                  className={`group flex min-h-[440px] flex-col overflow-hidden rounded-[2rem] border border-slate-900/5 ${cardTone}`}
                >
                  <div className="relative h-44 shrink-0 overflow-hidden bg-slate-800">
                    <img
                      src={image}
                      alt={alt}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      style={{ objectPosition: position }}
                      loading="lazy"
                      decoding="async"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-slate-950/10"
                      aria-hidden="true"
                    />
                    <span className="absolute right-4 top-4 border border-white/40 bg-slate-950/15 px-2.5 py-1.5 text-[10px] font-medium tracking-[0.18em] text-white backdrop-blur-sm">
                      0{index + 3}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <span className="grid h-10 w-10 place-items-center border border-slate-900/15 text-slate-700">
                      <SpecialtyIcon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <div className="mt-8">
                      <h3 className="font-serif text-2xl leading-tight tracking-[-0.025em] text-slate-950">
                        {title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-slate-600">{description}</p>
                    </div>
                    <Link
                      to="/contact"
                      className="group/link mt-auto inline-flex items-center gap-2 pt-5 text-[12px] font-medium text-slate-900"
                      aria-label={`Discuss ${title} requirements`}
                    >
                      Explore solutions
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="solutions" className="scroll-mt-28 px-5 pb-28 sm:px-8 sm:pb-40">
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
              One partner from strategy through support.
            </h2>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3 md:items-stretch">
            <div className="rounded-[2rem] bg-[#b9cbb9] p-7 md:mt-16">
              <ShieldCheck className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-16 font-serif text-2xl">Healthcare-aware delivery</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Clinical context, security and interoperability guide every engagement.
              </p>
            </div>

            <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-slate-900">
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85" alt="Secure infrastructure supporting connected healthcare services." className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <p className="font-serif text-3xl">Clear guidance from discovery to ongoing support.</p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#d7c7b7] p-7 md:mt-10 md:mb-6">
              <Headphones className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-16 font-serif text-2xl">Responsive partnership</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Practical collaboration and support long after implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-28 sm:px-8 sm:py-40">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="max-w-md">
            <h2 className="font-serif text-4xl leading-[1.06] tracking-[-0.04em] sm:text-5xl">
              Based in Doha. Ready to advance your digital roadmap.
            </h2>
            <p className="mt-5 text-[15px] leading-7 text-slate-600">
              Bring us your goals and current technology landscape. Our team will shape a practical
              path from discovery and architecture through implementation and support.
            </p>
            <div className="mt-7"><ArrowLink to="/contact">Book a consultation</ArrowLink></div>
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
                <p className="flex items-center gap-2"><Check className="h-4 w-4 text-[#66816a]" /> Strategic discovery</p>
                <p className="flex items-center gap-2"><Check className="h-4 w-4 text-[#66816a]" /> Secure implementation</p>
                <p className="flex items-center gap-2"><Check className="h-4 w-4 text-[#66816a]" /> Local ongoing support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-28 bg-[#ebe4d9] px-5 py-28 sm:px-8 sm:py-36">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-4xl tracking-[-0.04em] sm:text-6xl">A clear path from idea to impact.</h2>
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
          <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85" alt="Healthcare technology team collaborating on a digital transformation project." className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-slate-950/55" />
          <div className="relative flex min-h-[560px] items-center justify-center px-5 py-20 text-center text-white">
            <div className="max-w-3xl">
              <PackageCheck className="mx-auto h-8 w-8" strokeWidth={1.3} aria-hidden="true" />
              <h2 className="mt-7 font-serif text-4xl leading-[1.02] tracking-[-0.045em] sm:text-6xl">
                Let’s build better-connected care.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-white/70">
                Tell us where your organization wants to go. We’ll help define the right technology
                strategy, implementation roadmap and support model.
              </p>
              <div className="mt-7"><ArrowLink to="/contact" light>Book a consultation</ArrowLink></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
