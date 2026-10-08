import { useState } from 'react';
import {
  Check,
  ChevronRight,
  Minus,
  PackageCheck,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Truck,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { buildWhatsAppUrl } from '../data/contact';
import useDocumentMeta from '../hooks/useDocumentMeta';

const PRODUCT = {
  name: 'Safe Ears Ear Protection Aid',
  subtitle: 'Reusable ear covers for showering and hair washing',
  brand: 'Safe Ears',
  colour: 'Beige',
  use: 'Water Protection',
  style: 'Over-Ear',
  material: 'Soft silicone',
  price: 75,
  packageQuantity: '2 Count',
  images: [
    {
      src: '/products/product-1/Symmetrical Beige Safe Ears Earpieces.png',
      alt: 'Pair of symmetrical beige Safe Ears reusable ear protection covers.',
      label: 'ear covers',
    },
    {
      src: '/products/product-1/Safe Ears Product Showcase.png',
      alt: 'Safe Ears ear protection aid shown with its Large-size packaging.',
      label: 'product showcase',
    },
    {
      src: '/products/product-1/Safe Ears Shower Protection Ad.png',
      alt: 'Safe Ears water protection covers promoted for showering and hair washing.',
      label: 'shower protection view',
    },
  ],
  benefits: [
    'Helps reduce water entry while showering, bathing and washing hair.',
    'Flexible, skin-friendly silicone rests over the ear without entering the ear canal.',
    'Rinse with clean water and air dry for convenient, hygienic reuse.',
    'Contoured shape follows the outer ear for a secure and comfortable fit.',
    'Simple to place over clean, dry ears and press gently around the edges.',
  ],
  details: [
    ['Brand', 'Safe Ears'],
    ['Colour', 'Beige'],
    ['Recommended use', 'Water Protection'],
    ['Style', 'Over-Ear'],
    ['Material', 'Soft silicone'],
    ['Package quantity', '2 ear covers'],
    ['Product dimensions', '13 × 10 × 5 cm'],
    ['Item weight', '120 g'],
    ['Manufacturer', 'SAFE EARS INDIA'],
    ['Item part number', 'Ear Protection Aid001'],
    ['ASIN', 'B0GMW6YZ57'],
    ['Country of origin', 'India'],
    ['First available', '11 February 2026'],
    [
      'Packer',
      'Grand VF, Five Star Arcade, Anjukandy, near Govt. Hospital, Kannur 670017, Kerala, India',
    ],
  ],
};

const SIZES = ['XS', 'S', 'M', 'L'];
const MAX_QUANTITY = 99;

const EntAudiology = () => {
  useDocumentMeta({
    title: 'Safe Ears Ear Protection Aid in Qatar | Baraka Medical Solutions',
    description:
      'Shop reusable Safe Ears water-protection ear covers in Qatar. Choose XS, S, M or L and place your order with Baraka Medical Solutions on WhatsApp.',
    path: '/ent-audiology',
  });

  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [sizeError, setSizeError] = useState('');
  const [quantityError, setQuantityError] = useState('');

  const parsedQuantity = Number(quantity);
  const quantityIsValid =
    quantity !== '' &&
    Number.isInteger(parsedQuantity) &&
    parsedQuantity >= 1 &&
    parsedQuantity <= MAX_QUANTITY;
  const total = quantityIsValid ? PRODUCT.price * parsedQuantity : PRODUCT.price;

  const chooseSize = (size) => {
    setSelectedSize(size);
    setSizeError('');
  };

  const updateQuantity = (nextQuantity) => {
    setQuantity(String(Math.min(MAX_QUANTITY, Math.max(1, nextQuantity))));
    setQuantityError('');
  };

  const stepQuantity = (amount) => {
    updateQuantity((quantityIsValid ? parsedQuantity : 1) + amount);
  };

  const handleOrder = (event) => {
    event.preventDefault();

    const nextSizeError = selectedSize ? '' : 'Choose a size before placing your order.';
    const nextQuantityError = quantityIsValid
      ? ''
      : `Enter a whole-number quantity from 1 to ${MAX_QUANTITY}.`;

    setSizeError(nextSizeError);
    setQuantityError(nextQuantityError);

    if (nextSizeError || nextQuantityError) return;

    const message = [
      'Hello Baraka Medical Solutions,',
      '',
      'I would like to order:',
      `Product: ${PRODUCT.name}`,
      `Size: ${selectedSize}`,
      `Quantity: ${parsedQuantity} package${parsedQuantity === 1 ? '' : 's'}`,
      `Package: ${PRODUCT.packageQuantity}`,
      `Unit price: QAR ${PRODUCT.price}`,
      `Total: QAR ${PRODUCT.price * parsedQuantity}`,
      '',
      'Please confirm availability and delivery details.',
      'Product page: https://www.barakamedicals.com/ent-audiology',
    ].join('\n');

    const orderWindow = window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
    if (orderWindow) orderWindow.opener = null;
  };

  return (
    <div className="min-h-screen bg-[#f4f1e9] pt-24 text-slate-950 sm:pt-28">
      <header className="border-b border-slate-900/10 px-5 py-8 sm:px-8 sm:py-10">
        <div className="mx-auto max-w-[1180px]">
          <nav className="flex items-center gap-2 text-xs text-slate-500" aria-label="Breadcrumb">
            <Link to="/" className="transition-colors hover:text-slate-950">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span aria-current="page">ENT &amp; Audiology</span>
          </nav>
          <div className="mt-6 max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#9a5f25]">
              ENT &amp; Audiology
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-[1.04] tracking-[-0.04em] sm:text-5xl">
              Everyday ear protection, made simple.
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-600">
              Select the right size and place your order directly with our Doha team on WhatsApp.
            </p>
          </div>
        </div>
      </header>

      <main className="px-5 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto max-w-[1180px]">
          <section
            className="grid gap-10 border-b border-slate-900/10 pb-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-20"
            aria-labelledby="product-name"
          >
            <div>
              <div className="aspect-square overflow-hidden border border-slate-900/10 bg-white">
                <img
                  src={PRODUCT.images[activeImage].src}
                  alt={PRODUCT.images[activeImage].alt}
                  width="1280"
                  height="1280"
                  fetchPriority="high"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3" aria-label="Product image gallery">
                {PRODUCT.images.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`Show ${image.label}`}
                    aria-current={activeImage === index ? 'true' : undefined}
                    className={`aspect-square overflow-hidden border bg-white p-1.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 ${
                      activeImage === index
                        ? 'border-brand-600'
                        : 'border-slate-900/10 hover:border-slate-900/30'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt=""
                      width="1280"
                      height="1280"
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </button>
                ))}
              </div>
              <p className="mt-3 text-xs leading-5 text-slate-500">
                Product images show the Large variant. Appearance may vary slightly by selected size.
              </p>
            </div>

            <div className="lg:py-2">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="bg-[#e5ebe2] px-3 py-1.5 font-medium text-brand-700">
                  {PRODUCT.brand}
                </span>
                <span className="border border-slate-900/10 px-3 py-1.5 text-slate-500">
                  {PRODUCT.packageQuantity}
                </span>
              </div>

              <h2
                id="product-name"
                className="mt-5 font-serif text-4xl leading-[1.05] tracking-[-0.035em] sm:text-5xl"
              >
                {PRODUCT.name}
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-slate-600">{PRODUCT.subtitle}</p>

              <div className="mt-7 border-y border-slate-900/10 py-6">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Price per package</p>
                <div className="mt-2 flex items-end gap-3">
                  <p className="font-serif text-4xl text-[#9a5f25]">QAR {PRODUCT.price}</p>
                  <p className="pb-1 text-sm text-slate-500">for 2 ear covers</p>
                </div>
              </div>

              <form className="mt-7" onSubmit={handleOrder} noValidate>
                <fieldset aria-describedby={sizeError ? 'size-error' : 'size-help'}>
                  <legend className="text-sm font-medium text-slate-900">Choose a size</legend>
                  <div className="mt-3 grid grid-cols-4 gap-2">
                    {SIZES.map((size) => (
                      <button
                        key={size}
                        type="button"
                        aria-pressed={selectedSize === size}
                        onClick={() => chooseSize(size)}
                        className={`min-h-12 border px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 ${
                          selectedSize === size
                            ? 'border-brand-600 bg-brand-600 text-white'
                            : 'border-slate-900/15 bg-white text-slate-700 hover:border-brand-600'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  {sizeError ? (
                    <p id="size-error" className="mt-2 text-sm text-red-700" role="alert">
                      {sizeError}
                    </p>
                  ) : (
                    <p id="size-help" className="mt-2 text-xs leading-5 text-slate-500">
                      Large fits an ear height of 6.1–7.3 cm. Contact us for guidance on other sizes.
                    </p>
                  )}
                </fieldset>

                <div className="mt-6">
                  <label htmlFor="product-quantity" className="text-sm font-medium text-slate-900">
                    Quantity
                  </label>
                  <div className="mt-3 flex w-fit items-center border border-slate-900/15 bg-white">
                    <button
                      type="button"
                      onClick={() => stepQuantity(-1)}
                      disabled={quantityIsValid && parsedQuantity <= 1}
                      className="grid h-12 w-12 place-items-center text-slate-700 transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:text-slate-300"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <input
                      id="product-quantity"
                      type="number"
                      inputMode="numeric"
                      min="1"
                      max={MAX_QUANTITY}
                      step="1"
                      value={quantity}
                      onChange={(event) => {
                        setQuantity(event.target.value);
                        setQuantityError('');
                      }}
                      aria-invalid={Boolean(quantityError)}
                      aria-describedby={quantityError ? 'quantity-error' : undefined}
                      className="h-12 w-16 border-x border-slate-900/10 bg-white text-center text-sm font-medium outline-none focus:bg-brand-50"
                    />
                    <button
                      type="button"
                      onClick={() => stepQuantity(1)}
                      disabled={quantityIsValid && parsedQuantity >= MAX_QUANTITY}
                      className="grid h-12 w-12 place-items-center text-slate-700 transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:text-slate-300"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                  {quantityError && (
                    <p id="quantity-error" className="mt-2 text-sm text-red-700" role="alert">
                      {quantityError}
                    </p>
                  )}
                </div>

                <div className="mt-7 flex items-center justify-between border-t border-slate-900/10 pt-6">
                  <span className="text-sm text-slate-500">Order total</span>
                  <span className="font-serif text-3xl text-slate-950">QAR {total}</span>
                </div>

                <button
                  type="submit"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-brand-600 px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-600"
                >
                  <ShoppingBag className="h-4.5 w-4.5" aria-hidden="true" />
                  Place order on WhatsApp
                </button>
                <p className="mt-3 text-center text-xs leading-5 text-slate-500">
                  No online payment is taken. We will confirm availability and delivery on WhatsApp.
                </p>
              </form>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {[
                  [ShieldCheck, 'Reusable design'],
                  [PackageCheck, '2-count pack'],
                  [Truck, 'Delivery confirmed'],
                ].map(([Icon, label]) => (
                  <div key={label} className="flex items-center gap-2 border border-slate-900/10 bg-white p-3 text-xs text-slate-600">
                    <Icon className="h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="grid gap-12 py-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-20">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#9a5f25]">
                About this item
              </p>
              <h2 className="mt-3 font-serif text-3xl tracking-[-0.03em] sm:text-4xl">
                Comfortable protection for everyday routines.
              </h2>
              <ul className="mt-7 space-y-4">
                {PRODUCT.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm leading-6 text-slate-600">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center bg-[#e5ebe2] text-brand-700">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-3xl tracking-[-0.03em] sm:text-4xl">Product details</h2>
              <dl className="mt-7 border-t border-slate-900/10">
                {PRODUCT.details.map(([label, value]) => (
                  <div key={label} className="grid gap-1 border-b border-slate-900/10 py-4 sm:grid-cols-[0.42fr_0.58fr] sm:gap-6">
                    <dt className="text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                      {label}
                    </dt>
                    <dd className="text-sm leading-6 text-slate-700">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default EntAudiology;
