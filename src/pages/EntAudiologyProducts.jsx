import { ArrowRight, ChevronRight, Ear, PackageCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta';

const product = {
  name: 'Safe Ears Ear Protection Aid',
  subtitle: 'Reusable ear covers for showering and hair washing',
  image: '/products/product-1/Symmetrical Beige Safe Ears Earpieces.png',
  alt: 'Pair of beige Safe Ears reusable ear protection covers.',
  price: 75,
  packageQuantity: '2 ear covers',
  sizes: 'XS, S, M and L',
  to: '/ent-audiology/safe-ears',
};

const EntAudiologyProducts = () => {
  useDocumentMeta({
    title: 'ENT & Audiology Products in Qatar | Baraka Medical Solutions',
    description:
      'Browse ENT and audiology products available from Baraka Medical Solutions in Qatar.',
    path: '/ent-audiology',
  });

  return (
    <div className="min-h-screen bg-[#f4f1e9] pt-24 text-slate-950 sm:pt-28">
      <header className="border-b border-slate-900/10 px-5 py-8 sm:px-8 sm:py-12">
        <div className="mx-auto max-w-[1180px]">
          <nav className="flex items-center gap-2 text-xs text-slate-500" aria-label="Breadcrumb">
            <Link to="/" className="transition-colors hover:text-slate-950">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span aria-current="page">ENT &amp; Audiology</span>
          </nav>

          <div className="mt-8 grid items-end gap-8 md:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.28em] text-[#9a5f25]">
                <Ear className="h-4 w-4" aria-hidden="true" />
                ENT &amp; Audiology
              </div>
              <h1 className="mt-4 font-serif text-4xl leading-[1.04] tracking-[-0.04em] sm:text-6xl">
                Products for better ear care.
              </h1>
              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-600">
                Explore our available ENT and audiology products. Select a product to view details,
                choose your options and place an order.
              </p>
            </div>
            <p className="w-fit border border-slate-900/10 bg-white px-4 py-2 text-xs text-slate-500">
              1 product available
            </p>
          </div>
        </div>
      </header>

      <main className="px-5 py-10 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-[1180px]">
          <section aria-labelledby="available-products">
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-slate-900/10 pb-4">
              <h2 id="available-products" className="font-serif text-2xl tracking-[-0.03em] sm:text-3xl">
                Available products
              </h2>
              <span className="text-xs text-slate-500">Select to view and buy</span>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                to={product.to}
                className="group block border border-slate-900/10 bg-white transition-colors hover:border-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
                aria-label={`View and buy ${product.name}`}
              >
                <article>
                  <div className="relative aspect-square overflow-hidden border-b border-slate-900/10 bg-[#f8f6f0] p-5 sm:p-7">
                    <img
                      src={product.image}
                      alt={product.alt}
                      width="1280"
                      height="1280"
                      fetchPriority="high"
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.025]"
                    />
                    <span className="absolute left-4 top-4 bg-brand-600 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                      Available
                    </span>
                  </div>

                  <div className="p-5 sm:p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-700">
                      Safe Ears
                    </p>
                    <h3 className="mt-2 font-serif text-2xl leading-tight tracking-[-0.025em] text-slate-950">
                      {product.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-500">{product.subtitle}</p>

                    <div className="mt-5 flex items-center gap-2 text-xs text-slate-500">
                      <PackageCheck className="h-4 w-4 text-brand-600" aria-hidden="true" />
                      {product.packageQuantity} · Sizes {product.sizes}
                    </div>

                    <div className="mt-6 flex items-end justify-between gap-4 border-t border-slate-900/10 pt-5">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.14em] text-slate-400">
                          Price per package
                        </p>
                        <p className="mt-1 font-serif text-2xl text-[#9a5f25]">
                          QAR {product.price}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-2 bg-brand-600 px-4 py-3 text-xs font-medium text-white transition-colors group-hover:bg-brand-700">
                        View product
                        <ArrowRight
                          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default EntAudiologyProducts;
