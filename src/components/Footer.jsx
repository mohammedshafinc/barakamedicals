import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Heart, Share2, Globe, MessageCircle } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const contactItems = [
  { label: 'info@barakamedicals.qa', href: 'mailto:info@barakamedicals.qa' },
  { label: '+974 XXXX XXXX', href: 'tel:+974XXXXXXXX' },
];

const socialIcons = [
  { label: 'Message', href: '#', icon: <MessageCircle className="w-5 h-5" /> },
  { label: 'Website', href: '#', icon: <Globe className="w-5 h-5" /> },
  { label: 'Share', href: '#', icon: <Share2 className="w-5 h-5" /> },
];

function FooterColumn({ heading, items }) {
  return (
    <div className="flex flex-col gap-3.5 md:gap-6 min-w-0">
      <p className="text-[#2c2c2c] text-xs md:text-sm font-bold tracking-wider uppercase">
        {heading}
      </p>
      <ul className="flex flex-col gap-2.5 md:gap-4">
        {items.map((item) => (
          <li key={item.label}>
            {item.href.startsWith('http') || item.href.startsWith('mailto:') || item.href.startsWith('tel:') ? (
              <a
                href={item.href}
                className="text-[#64748b] text-sm md:text-base hover:text-[#2c2c2c] transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                to={item.href}
                className="text-[#64748b] text-sm md:text-base hover:text-[#2c2c2c] transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

const Footer = () => {
  return (
    <>
      <footer className="relative w-full border-t border-[#e2e8f0] bg-white overflow-hidden">
        <div className="relative z-10 flex flex-col items-center px-4 pt-12 pb-2 md:px-6 md:pt-20">
          <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 md:gap-16">
            {/* Main content row */}
            <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16 w-full">
              {/* Brand column */}
              <div className="flex flex-col items-start gap-6 w-full md:max-w-md">
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">B</span>
                  </div>
                  <span className="text-2xl font-bold text-gray-900">Baraka Medicals</span>
                </div>
                <p className="text-[#64748b] text-sm md:text-base leading-relaxed max-w-sm">
                  Empowering healthcare by providing quality medical devices and fostering trusted connections within the industry.
                </p>
                <div className="flex gap-5 items-center">
                  {socialIcons.map(({ label, href, icon }) => (
                    <a
                      key={label}
                      href={href}
                      className="inline-flex items-center justify-center w-10 h-10 text-[#64748b] hover:text-red-600 transition-colors"
                      aria-label={label}
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Links columns */}
              <div className="flex flex-wrap md:flex-nowrap items-start justify-between md:flex-1 gap-8 md:gap-12 w-full">
                <FooterColumn heading="Quick Links" items={quickLinks} />
                
                {/* Location column */}
                <div className="flex flex-col gap-3.5 md:gap-6 min-w-0 md:max-w-xs">
                  <p className="text-[#2c2c2c] text-xs md:text-sm font-bold tracking-wider uppercase">
                    Location
                  </p>
                  <div className="flex flex-col gap-2">
                    <p className="text-[#2c2c2c] text-sm md:text-base font-bold">
                      Baraka Medicals Doha
                    </p>
                    <p className="text-[#64748b] text-sm md:text-base leading-relaxed">
                      Doha, Qatar
                    </p>
                  </div>
                </div>

                <FooterColumn heading="Contact" items={contactItems} />
              </div>
            </div>

            {/* Divider */}
            <div className="w-full border-t border-[#e2e8f0]" />

            {/* Bottom bar */}
            <div className="flex flex-col gap-3 pb-4 md:pb-6 md:flex-row md:items-center md:justify-between">
              <p className="text-[#64748b] text-sm md:text-base">
                ©{new Date().getFullYear()} Baraka Medicals. Made with{' '}
                <Heart className="inline-block w-4 h-4 text-red-600 fill-red-600" />{' '}
                for better healthcare.
              </p>
              <div className="flex gap-4 items-center">
                <Link
                  to="/privacy"
                  className="border border-[#e2e8f0] rounded-full px-4 py-2 text-[#475569] text-xs md:text-sm font-medium hover:border-[#94a3b8] transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="border border-[#e2e8f0] rounded-full px-4 py-2 text-[#475569] text-xs md:text-sm font-medium hover:border-[#94a3b8] transition-colors"
                >
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="tel:+974XXXXXXXX"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white shadow-lg hover:scale-110 transition-transform"
          aria-label="Call Us"
        >
          <Phone className="h-6 w-6" />
        </a>
        <a
          href="https://wa.me/974XXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </>
  );
};

export default Footer;
