import {
  ArrowRight,
  Award,
  Check,
  Eye,
  Lightbulb,
  MapPin,
  ShieldCheck,
  Target,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const audiences = ['Hospitals', 'Clinics', 'Health networks', 'Diagnostic centers', 'Healthcare teams'];

const values = [
  {
    title: 'Healthcare insight',
    description: 'Technology decisions grounded in clinical, operational and patient needs.',
    icon: Award,
    color: 'bg-[#b9cbb9]',
  },
  {
    title: 'Trust',
    description: 'Clear advice, responsible implementation and security-conscious practices.',
    icon: ShieldCheck,
    color: 'bg-[#d8c8b8]',
  },
  {
    title: 'Partnership',
    description: 'Your people and priorities remain central from discovery through support.',
    icon: Users,
    color: 'bg-[#cbd8d8]',
  },
  {
    title: 'Innovation',
    description: 'Practical digital solutions that improve experience, insight and efficiency.',
    icon: Lightbulb,
    color: 'bg-[#ddd6b9]',
  },
  {
    title: 'Reliability',
    description: 'Resilient systems, disciplined implementation and responsive local support.',
    icon: Check,
    color: 'bg-[#d4c7d3]',
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-[#f4f1e9] pt-20 text-slate-950 sm:pt-24">
      <section className="px-5 pb-16 pt-20 text-center sm:px-8 sm:pb-20 sm:pt-28">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-serif text-5xl leading-[0.98] tracking-[-0.05em] sm:text-7xl lg:text-[88px]">
            Better care starts with technology teams can trust.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-base">
            Baraka Medical Solutions helps healthcare organizations plan, implement, integrate and
            support secure digital systems that make care and operations work better.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6">
        <div className="relative mx-auto aspect-[16/8] min-h-[430px] max-w-[1340px] overflow-hidden rounded-[2.5rem] bg-slate-900 sm:rounded-[3rem]">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85"
            alt="Healthcare technology team collaborating on digital strategy in Doha."
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/5 to-transparent" aria-hidden="true" />

          <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-4 sm:bottom-8 sm:left-8 sm:right-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-lg text-white">
              <p className="font-serif text-3xl leading-tight sm:text-4xl">
                Empowering the people who transform healthcare.
              </p>
            </div>
            <div className="flex items-center gap-3 self-start rounded-2xl border border-white/20 bg-white/90 px-4 py-3 text-slate-950 shadow-lg backdrop-blur sm:self-auto">
              <MapPin className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              <div>
                <p className="text-xs font-medium">Doha, Qatar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-28 sm:px-8 sm:py-40">
        <div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <h2 className="font-serif text-4xl leading-[1.06] tracking-[-0.04em] sm:text-5xl">
              Healthcare transformation built around your organization.
            </h2>
          </div>

          <div>
            <div className="space-y-6 text-[15px] leading-8 text-slate-600 sm:text-base">
              <p>
                We help healthcare organizations turn strategy into dependable digital capability.
                Our work spans technology roadmaps, patient and provider CRM, ERP, EMR,
                interoperability, cloud platforms and cybersecurity, designed around real clinical
                and operational workflows.
              </p>
              <p>
                From discovery and solution architecture to implementation, integration, adoption
                and ongoing support, our Doha-based team works collaboratively to reduce complexity,
                strengthen resilience and create measurable value from technology.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-2.5">
              {audiences.map((audience) => (
                <span
                  key={audience}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-3.5 py-2 text-xs text-slate-600"
                >
                  <Check className="h-3 w-3" aria-hidden="true" />
                  {audience}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e5ebe2] px-5 py-28 sm:px-8 sm:py-36">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-4xl leading-[1.06] tracking-[-0.04em] sm:text-6xl">
              Purpose guides every solution and partnership.
            </h2>
          </div>

          <div className="mt-16 grid gap-4 lg:grid-cols-2">
            <article className="flex min-h-[430px] flex-col rounded-[2.5rem] bg-[#f8f5ef] p-8 sm:p-10">
              <div className="flex items-center justify-end">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-slate-300">
                  <Target className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
              </div>
              <div className="mt-auto max-w-md">
                <h3 className="font-serif text-4xl tracking-[-0.04em] sm:text-5xl">Make healthcare technology work for people.</h3>
                <p className="mt-5 text-sm leading-7 text-slate-600">
                  Our mission is to translate healthcare priorities into secure, connected and
                  usable digital solutions that improve experiences, decisions and outcomes.
                </p>
              </div>
            </article>

            <article className="flex min-h-[430px] flex-col rounded-[2.5rem] bg-[#c8d7d8] p-8 sm:p-10">
              <div className="flex items-center justify-end">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-slate-950/20">
                  <Eye className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
              </div>
              <div className="mt-auto max-w-md">
                <h3 className="font-serif text-4xl tracking-[-0.04em] sm:text-5xl">A more connected, resilient healthcare future.</h3>
                <p className="mt-5 text-sm leading-7 text-slate-700">
                  Our vision is to be Qatar’s trusted healthcare technology partner, helping organizations
                  connect systems, protect data and continuously improve digital care delivery.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="px-5 py-28 sm:px-8 sm:py-40">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl leading-[1.06] tracking-[-0.04em] sm:text-6xl">
              Values made visible in how we work.
            </h2>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {values.map(({ title, description, icon: Icon, color }, index) => (
              <article
                key={title}
                className={`flex min-h-[320px] flex-col rounded-[2rem] p-6 ${color} ${
                  index === values.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-slate-600/70">0{index + 1}</span>
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div className="mt-auto">
                  <h3 className="font-serif text-2xl tracking-[-0.03em]">{title}</h3>
                  <p className="mt-3 text-xs leading-6 text-slate-700">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-4 sm:px-6 sm:pb-6">
        <div className="relative mx-auto min-h-[560px] max-w-[1340px] overflow-hidden rounded-[2.5rem] bg-slate-950 sm:rounded-[3rem]">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=85"
            alt="Healthcare analytics platform supporting informed clinical and operational decisions."
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-slate-950/60" aria-hidden="true" />
          <div className="relative flex min-h-[560px] items-center justify-center px-5 py-20 text-center text-white">
            <div className="max-w-3xl">
              <ShieldCheck className="mx-auto h-8 w-8" strokeWidth={1.3} aria-hidden="true" />
              <h2 className="mt-7 font-serif text-4xl leading-[1.02] tracking-[-0.045em] sm:text-6xl">
                Start your digital transformation.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-white/70">
                Whether you are modernizing an EMR, connecting systems, moving securely to cloud or
                improving patient engagement, we can help you move from ambition to implementation.
              </p>
              <Link
                to="/contact"
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-medium text-slate-950 transition-transform hover:-translate-y-0.5"
              >
                Book a consultation
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
