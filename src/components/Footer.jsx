import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="rounded-t-[2.5rem] bg-white px-5 pb-8 pt-16 text-slate-950 sm:px-8 sm:pt-20">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-12 border-b border-slate-200 pb-14 md:grid-cols-[1.4fr_0.6fr_0.7fr]">
          <div className="max-w-md">
            <Link to="/" className="font-serif text-3xl tracking-[-0.04em]" aria-label="Baraka Medical Devices home">
              Baraka Medical Devices
            </Link>
            <p className="mt-4 text-sm leading-7 text-slate-500">
              Quality medical devices, monitoring solutions and consumables backed by practical
              guidance and responsive support.
            </p>
          </div>

          <div>
            <nav className="flex flex-col gap-3 text-sm" aria-label="Footer navigation">
              <a href="/#products" className="transition-colors hover:text-slate-500">Products</a>
              <a href="/#why-baraka" className="transition-colors hover:text-slate-500">Why Baraka</a>
              <a href="/#process" className="transition-colors hover:text-slate-500">How it works</a>
              <Link to="/about" className="transition-colors hover:text-slate-500">About us</Link>
              <Link to="/contact" className="transition-colors hover:text-slate-500">Contact</Link>
            </nav>
          </div>

          <div>
            <div className="flex flex-col gap-4 text-sm">
              <a
                href="mailto:info@barakamedicals.com"
                className="flex items-center gap-2.5 transition-colors hover:text-slate-500"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                info@barakamedicals.com
              </a>
              <p className="flex items-center gap-2.5 text-slate-500">
                <MapPin className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                Doha, Qatar
              </p>
              <Link to="/contact" className="group inline-flex items-center gap-2 font-medium">
                Send an enquiry
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Baraka Medical Devices.</p>
          <p>Medical supply with clarity and care.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
