import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { label: 'Products', to: '/#products' },
  { label: 'Why Baraka', to: '/#why-baraka' },
  { label: 'How it works', to: '/#process' },
  { label: 'FAQ', to: '/#faq' },
  { label: 'About us', to: '/about' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const isOverlay = isHome && !isScrolled && !isOpen;

  useEffect(() => {
    const updateNavbar = () => setIsScrolled(window.scrollY > 32);
    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });
    return () => window.removeEventListener('scroll', updateNavbar);
  }, [pathname]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-5 transition-all duration-300 sm:px-8 lg:px-10 xl:px-8 ${
        isOverlay ? '' : 'bg-[#f4f1e9]/92 shadow-[0_1px_0_rgba(15,23,42,0.08)] backdrop-blur-xl'
      }`}
    >
      <nav
        className={`mx-auto flex h-20 w-full max-w-[1340px] items-center justify-between border-b transition-colors duration-300 sm:h-24 ${
          isOverlay ? 'border-white/20' : 'border-transparent'
        }`}
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className={`text-[20px] font-medium tracking-[-0.035em] transition-opacity hover:opacity-70 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 sm:text-[21px] ${
            isOverlay ? 'text-white focus-visible:outline-white' : 'text-slate-950 focus-visible:outline-slate-950'
          }`}
          aria-label="Baraka Medical Devices home"
          onClick={closeMenu}
        >
          Baraka Medical Devices
        </Link>

        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navigation.map(({ label, to }) => (
            <a
              key={label}
              href={to}
              className={`text-[13px] font-normal transition-colors ${
                isOverlay ? 'text-white/72 hover:text-white' : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <Link
          to="/contact"
          className={`group hidden items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-medium transition-all hover:-translate-y-0.5 lg:inline-flex ${
            isOverlay ? 'bg-white text-slate-950 hover:bg-white/90' : 'bg-slate-950 text-white hover:bg-slate-800'
          }`}
        >
          Request a quote
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>

        <button
          type="button"
          className={`grid h-10 w-10 place-items-center rounded-full border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 lg:hidden ${
            isOverlay
              ? 'border-white/25 bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white'
              : 'border-slate-300 bg-white/60 text-slate-950 hover:bg-white focus-visible:outline-slate-950'
          }`}
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isOpen ? <X className="h-4.5 w-4.5" aria-hidden="true" /> : <Menu className="h-4.5 w-4.5" aria-hidden="true" />}
        </button>
      </nav>

      {isOpen && (
        <nav
          id="mobile-navigation"
          className="mx-auto mb-3 max-w-[1340px] rounded-2xl border border-slate-950/10 bg-white/95 p-3 text-slate-950 shadow-2xl backdrop-blur-xl lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="space-y-1">
            {navigation.map(({ label, to }) => (
              <a
                key={label}
                href={to}
                onClick={closeMenu}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-[14px] font-normal transition-colors hover:bg-[#f4f1e9]"
              >
                {label}
              </a>
            ))}
          </div>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="group mt-3 flex items-center justify-between rounded-xl bg-slate-950 px-4 py-3 text-[13px] font-medium text-white"
          >
            Request a quote
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
