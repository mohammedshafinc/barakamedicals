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

  useEffect(() => {
    const updateNavbar = () => setIsScrolled(window.scrollY > 32);
    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });
    return () => window.removeEventListener('scroll', updateNavbar);
  }, [pathname]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4 lg:px-6">
      <div className="relative mx-auto max-w-[1380px]">
        <div
          className="pointer-events-none absolute inset-x-10 -bottom-2 h-12 rounded-full bg-white/35 blur-2xl"
          aria-hidden="true"
        />
        <div
          className={`relative overflow-hidden rounded-[1.35rem] border text-slate-950 backdrop-blur-2xl transition-all duration-500 ${
            isScrolled
              ? 'border-white/75 bg-[#f7f8f4]/90 shadow-[0_12px_36px_-18px_rgba(22,48,42,0.42)]'
              : 'border-white/55 bg-white/68 shadow-[0_12px_34px_-20px_rgba(22,48,42,0.32)]'
          }`}
        >
          <div
            className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
            aria-hidden="true"
          />

          <nav
            className="relative flex h-16 w-full items-center justify-between px-4 sm:h-[4.5rem] sm:px-6 lg:px-7"
            aria-label="Main navigation"
          >
            <Link
              to="/"
              className="text-[17px] font-medium tracking-[-0.035em] text-slate-900 transition-opacity hover:opacity-65 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-800 sm:text-[19px]"
              aria-label="Baraka Medical Devices home"
              onClick={closeMenu}
            >
              Baraka Medical Devices
            </Link>

            <div className="hidden items-center gap-5 lg:flex xl:gap-7">
              {navigation.map(({ label, to }) => (
                <a
                  key={label}
                  href={to}
                  className="text-[12px] font-normal text-slate-600 transition-colors hover:text-slate-950"
                >
                  {label}
                </a>
              ))}
            </div>

            <Link
              to="/contact"
              className="group hidden items-center gap-2 rounded-full border border-white/55 bg-[#d9efb9] px-4 py-2.5 text-[12px] font-medium text-[#263c2b] shadow-[0_6px_18px_-10px_rgba(65,99,52,0.7)] transition-all hover:-translate-y-0.5 hover:bg-[#cfeeaa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38583d] lg:inline-flex"
            >
              Request a quote
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>

            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/70 bg-white/55 text-slate-900 shadow-sm transition-colors hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800 lg:hidden"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isOpen ? (
                <X className="h-4.5 w-4.5" aria-hidden="true" />
              ) : (
                <Menu className="h-4.5 w-4.5" aria-hidden="true" />
              )}
            </button>
          </nav>

          {isOpen && (
            <nav
              id="mobile-navigation"
              className="relative border-t border-slate-950/8 bg-white/28 p-3 text-slate-950 lg:hidden"
              aria-label="Mobile navigation"
            >
              <div className="space-y-1">
                {navigation.map(({ label, to }) => (
                  <a
                    key={label}
                    href={to}
                    onClick={closeMenu}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-[14px] font-normal transition-colors hover:bg-white/55"
                  >
                    {label}
                  </a>
                ))}
              </div>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="group mt-3 flex items-center justify-between rounded-xl bg-[#d9efb9] px-4 py-3 text-[13px] font-medium text-[#263c2b]"
              >
                Request a quote
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
