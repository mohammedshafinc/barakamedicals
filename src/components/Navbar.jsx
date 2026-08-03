import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About us', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="mx-auto max-w-7xl">
        <nav
          className="rounded-2xl border border-gray-200/80 bg-white/90 shadow-[0_10px_40px_-18px_rgba(18,43,60,0.28)] backdrop-blur-xl"
          aria-label="Main navigation"
        >
          <div className="flex h-18 items-center justify-between px-4 sm:px-5 lg:px-6">
            <Link
              to="/"
              className="shrink-0 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
              aria-label="Baraka Medical Devices — Home"
              onClick={closeMenu}
            >
              <Logo className="h-10 w-auto sm:h-11" />
            </Link>

            <div className="hidden items-center gap-3 lg:flex">
              <div className="flex items-center rounded-full border border-gray-200 bg-gray-50/80 p-1">
                {navigation.map(({ label, to }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      `rounded-full px-4 py-2 text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 ${
                        isActive
                          ? 'bg-white text-brand-700 shadow-sm ring-1 ring-gray-200/70'
                          : 'text-gray-600 hover:bg-white/70 hover:text-gray-900'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </div>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
              >
                Request a quote
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>

            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full border border-gray-200 bg-gray-50 text-brand-800 transition-colors hover:border-brand-200 hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 lg:hidden"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </nav>

        {isOpen && (
          <nav
            id="mobile-navigation"
            className="mt-2 rounded-2xl border border-gray-200/80 bg-white/95 p-3 shadow-[0_18px_50px_-22px_rgba(18,43,60,0.32)] backdrop-blur-xl lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="space-y-1">
              {navigation.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600 ${
                      isActive
                        ? 'bg-brand-50 text-brand-700'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-brand-700'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>

            <div className="mt-3 border-t border-gray-200 pt-3">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
              >
                Request a quote
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
