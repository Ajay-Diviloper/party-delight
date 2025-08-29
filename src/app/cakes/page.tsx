"use client"
import { useState } from 'react';
import { Category } from '@/lib/category-new';
import Image from 'next/image';


import Link from 'next/link';

export default function CakeGalleryPage() {
  const cakesCategory = Category.find(cat => cat.slug === 'cakes');
  const products = cakesCategory?.products || [];
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const openGallery = (idx: number) => {
    setCurrent(idx);
    setOpen(true);
  };
  //const closeGallery = () => setOpen(false);
  const prev = () => setCurrent((c) => (c === 0 ? products.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === products.length - 1 ? 0 : c + 1));

  if (!cakesCategory || !cakesCategory.products) {
    return <div>No cakes found.</div>;
  }

  return (
    <div className="flex container mx-auto py-10 px-4 gap-8">
        
      {/* Sidebar with cake names and details */}
        <aside className="w-80 min-w-[320px] bg-gradient-to-br from-[#fff0f0] via-[#ffe5e5] to-[#ffd6d6] rounded-2xl shadow-xl p-6 h-fit sticky top-8 self-start border border-[#ff3131]/20">
          <h2 className="text-2xl font-extrabold mb-6 text-[#ff3131] tracking-wide text-center drop-shadow">🍰 Cake List</h2>
          <ul className="space-y-3">
            {products.map((product, idx) => (
              <li key={idx}>
                <Link href={`/products/${encodeURIComponent(product.slug || product.name.replace(/\s+/g, '-').toLowerCase())}`}
                  className="block p-3 rounded-xl bg-white/70 hover:bg-[#ff3131]/10 transition font-semibold text-base text-[#ff3131] shadow hover:shadow-lg border border-transparent hover:border-[#ff3131]/30"
                >
                  <span className="truncate block">{product.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>

      {/* Main gallery grid */}
      <div className="flex-1">
       
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <button
                key={idx}
                className="group bg-white rounded-2xl shadow-xl p-4 flex flex-col items-center focus:outline-none border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-200"
                onClick={() => openGallery(idx)}
                aria-label={`Open gallery for ${product.name}`}
              >
                <div className="relative w-full h-56 overflow-hidden rounded-xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={idx < 3}
                  />
                </div>
              </button>
            ))}
          </div>

        {/* Modal Gallery */}
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            <div className="relative w-full max-w-2xl h-[70vh] flex items-center justify-center bg-white rounded-lg overflow-hidden shadow-lg">
              {/* Close button */}
              <button
                type="button"
                className="absolute top-4 right-4 text-black rounded-full p-2 text-[25px] z-20"
                onClick={() => setOpen(false)}
                aria-label="Close gallery"
              >
                &times;
              </button>
              {/* Image and controls only */}
              <button
                type="button"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow hover:bg-opacity-100 z-10"
                onClick={prev}
                aria-label="Previous image"
              >
                &#8592;
              </button>
              <div className="relative w-full h-full">
                <Image
                  src={products[current].image}
                  alt={products[current].name}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 66vw"
                  priority
                />
              </div>
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow hover:bg-opacity-100 z-10"
                onClick={next}
                aria-label="Next image"
              >
                &#8594;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
