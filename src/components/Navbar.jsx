import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Ear, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Departments', to: '/ent-audiology' },
  { label: 'Why Baraka', to: '/#why-baraka' },
  { label: 'How it works', to: '/#process' },
  { label: 'FAQ', to: '/#faq' },
  { label: 'About us', to: '/about' },
];

const department = {
  label: 'ENT and Audiology',
  description: 'Complete ENT care, hearing diagnostics, and audiology solutions.',
  to: '/ent-audiology',
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const updateNavbar = () => setIsScrolled(window.scrollY > 32);
    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });
    return () => window.removeEventListener('scroll', updateNavbar);
  }, [pathname]);

  useEffect(() => {
    setIsDepartmentOpen(false);
  }, [pathname]);

  const closeMenu = () => {
    setIsOpen(false);
    setIsDepartmentOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4 lg:px-6">
      <div className="relative mx-auto max-w-[1380px]">
        <div
          className="pointer-events-none absolute inset-x-10 -bottom-2 h-12 rounded-full bg-white/35 blur-2xl"
          aria-hidden="true"
        />
        <div
          className={`relative overflow-visible rounded-[1.35rem] border text-slate-950 backdrop-blur-2xl transition-all duration-500 ${
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
              className="flex items-center text-slate-900 transition-opacity hover:opacity-65 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-800"
              aria-label="Baraka Medical Solutions home"
              onClick={closeMenu}
            >
              <Logo className="h-9 w-auto sm:h-10" label={null} />
            </Link>

            <div className="hidden items-center gap-5 lg:flex xl:gap-7">
              {navigation.map(({ label, to }) => {
                if (label === 'Departments') {
                  return (
                    <div
                      key={label}
                      className="relative"
                      onMouseEnter={() => setIsDepartmentOpen(true)}
                      onMouseLeave={() => setIsDepartmentOpen(false)}
                      onFocus={() => setIsDepartmentOpen(true)}
                      onBlur={(event) => {
                        if (!event.currentTarget.contains(event.relatedTarget)) {
                          setIsDepartmentOpen(false);
                        }
                      }}
                    >
                      <button
                        type="button"
                        className="flex items-center gap-1.5 py-6 text-sm font-normal text-slate-600 transition-colors hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
                        aria-haspopup="true"
                        aria-expanded={isDepartmentOpen}
                        onClick={() => setIsDepartmentOpen(true)}
                      >
                        {label}
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform duration-200 ${
                            isDepartmentOpen ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      <div
                        className={`absolute left-1/2 top-full z-20 w-[26rem] -translate-x-1/2 pt-3 transition-all duration-200 ${
                          isDepartmentOpen
                            ? 'visible translate-y-0 opacity-100'
                            : 'invisible translate-y-1 opacity-0'
                        }`}
                      >
                        <div className="rounded-2xl border border-slate-200/80 bg-white p-3 drop-shadow-[0_18px_34px_rgba(15,29,25,0.16)]">
                          <p className="px-3 pb-2 pt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-700">
                            Our department
                          </p>
                          <Link
                            to={department.to}
                            onClick={closeMenu}
                            className="group/item flex items-center gap-4 rounded-xl border border-transparent p-3 transition-colors hover:border-brand-100 hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600"
                          >
                            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-brand-100 bg-white text-brand-700">
                              <Ear className="h-6 w-6" aria-hidden="true" />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block text-sm font-semibold text-slate-950">
                                {department.label}
                              </span>
                              <span className="mt-1 block text-xs leading-5 text-slate-500">
                                {department.description}
                              </span>
                            </span>
                            <ArrowRight
                              className="h-4 w-4 shrink-0 text-brand-600 transition-transform group-hover/item:translate-x-0.5"
                              aria-hidden="true"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                }

                return to.includes('#') ? (
                  <a
                    key={label}
                    href={to}
                    className="text-sm font-normal text-slate-600 transition-colors hover:text-slate-950"
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    key={label}
                    to={to}
                    className="text-sm font-normal text-slate-600 transition-colors hover:text-slate-950"
                  >
                    {label}
                  </Link>
                );
              })}
            </div>

            <Link
              to="/contact"
              className="group hidden items-center gap-2 rounded-full border border-brand-600 bg-brand-600 px-4 py-2.5 text-[12px] font-medium text-white transition-colors hover:border-brand-700 hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 lg:inline-flex"
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
              className="relative border-t border-slate-950/8 bg-white/80 p-3 text-slate-950 backdrop-blur-2xl lg:hidden"
              aria-label="Mobile navigation"
            >
              <div className="space-y-1">
                {navigation.map(({ label, to }) => {
                  if (label === 'Departments') {
                    return (
                      <div key={label} className="rounded-xl bg-brand-50/70 p-1">
                        <p className="px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-700">
                          {label}
                        </p>
                        <Link
                          to={department.to}
                          onClick={closeMenu}
                          className="flex items-center gap-3 rounded-lg px-3 py-3 text-[14px] font-medium transition-colors hover:bg-white"
                        >
                          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-brand-100 bg-white text-brand-700">
                            <Ear className="h-4.5 w-4.5" aria-hidden="true" />
                          </span>
                          {department.label}
                          <ArrowRight className="ml-auto h-4 w-4 text-brand-600" aria-hidden="true" />
                        </Link>
                      </div>
                    );
                  }

                  return to.includes('#') ? (
                    <a
                      key={label}
                      href={to}
                      onClick={closeMenu}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-[14px] font-normal transition-colors hover:bg-white/55"
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      key={label}
                      to={to}
                      onClick={closeMenu}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-[14px] font-normal transition-colors hover:bg-white/55"
                    >
                      {label}
                    </Link>
                  );
                })}
              </div>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="group mt-3 flex items-center justify-between rounded-xl bg-brand-600 px-4 py-3 text-[13px] font-medium text-white transition-colors hover:bg-brand-700"
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
