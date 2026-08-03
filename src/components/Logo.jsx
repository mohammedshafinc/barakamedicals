/**
 * Baraka Medical Devices logo lockup.
 *
 * The asset already contains the "Baraka / Medical Devices" wordmark, so it is
 * rendered on its own rather than alongside a duplicate text label.
 */
const Logo = ({ className = 'h-14 w-auto' }) => (
  <img
    src="/logo/u.svg"
    alt="Baraka Medical Devices"
    className={className}
    width="1010"
    height="296"
    decoding="async"
  />
);

export default Logo;
