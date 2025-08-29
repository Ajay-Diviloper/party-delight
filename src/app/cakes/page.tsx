"use client"
import { useState } from 'react';
import { Category } from '@/lib/category-new';
import Image from 'next/image';


//import Link from 'next/link';

export default function CakeGalleryPage() {
  const cakesCategory = Category.find(cat => cat.slug === 'cakes');
  const products = cakesCategory?.products || [];
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

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


    
  //   const handleSelect = (index: number) => {
  //   setSelectedIndex(index === selectedIndex ? null : index); // toggle on same click
  // };

  return (
    <div className=' mx-auto py-10 px-4 gap-8"'> 
      <section className="w-full flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-4xl font-heading font-normal text-gray-900 mb-4 px-4">Explore Our Cakes Gallery</h1>
        {/* <h2 className="text-lg md:text-xl text-gray-700 text-center mb-2 font-medium">Delightful Cakes for Every Occasion</h2> */}
        {/* <p className="max-w-2xl text-center text-gray-500 mb-2 px-2 md:px-0">
          Discover our curated selection of cakes, each crafted with passion and the finest ingredients. Whether you crave classic flavors or unique creations, our gallery has something to satisfy every sweet tooth. Click on any cake to see its details, price, and available variants.
        </p> */}
        {/* <div className="w-24 h-1 bg-[#ff3131] rounded-full mt-2 mb-2"></div> */}
      </section>
    <div className="flex flex-col md:flex-row container mx-auto md:py-10 py-2 px-4 gap-8">

        
 
      {/* Main gallery grid */}
      <div className="flex-1">
       
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-xl">
            {products.map((product, idx) => (
              <button
                key={idx}
                className="group rounded-xl  shadow-xl  flex flex-col items-center focus:outline-none hover:shadow-2xl hover:-translate-y-1 transition-all duration-200"
                onClick={() => openGallery(idx)}
                aria-label={`Open gallery for ${product.name}`}
              >
                <div className="relative w-full h-60 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-xl"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={idx < 3}
                  />
                </div>
              </button>
            ))}
          </div>

        {/* Modal Gallery */}
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 bg-opacity-50 px-4">
            <div className="relative w-full max-w-2xl h-[40vh] md:h-[70vh] flex items-center justify-center bg-white rounded-lg overflow-hidden shadow-lg ">
              {/* Close button */}
              <button
                type="button"
                className="absolute top-4 right-4 text-black rounded-full p-2 text-[25px] z-20 hover:text-[#ff3131] focus:outline-none"
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
              <div className="relative w-full h-full ">
                <Image
                  src={products[current].image}
                  alt={products[current].name}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 46vw"
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


           {/* Sidebar with cake names and details */}
        <div className="flex flex-col lg:flex-row gap-6">
           <aside className="md:w-60 lg:w-80 w-full   bg-gradient-to-br from-[#fff0f0] via-[#ffe5e5] to-[#ffd6d6] rounded-2xl shadow-xl p-6 sticky top-8 self-start">
        <h2 className="text-2xl font-extrabold mb-6 text-[#ff3131] tracking-wide text-center drop-shadow">🍰 Cakes List</h2>
        <ul className="space-y-3">
          {products.map((product, idx) => (
            <li key={idx}>
              <button
                onClick={() => setSelectedIndex(idx)}
                className={`w-full text-left block p-3 rounded-xl font-semibold text-base shadow transition-all duration-200
                  ${selectedIndex === idx 
                    ? 'bg-[#ff3131]/20  text-[#ff3131]' 
                    : 'bg-white/70 border-transparent text-[#ff3131] hover:bg-[#ff3131]/10 hover:shadow-lg '}`}
              >
                <span className="truncate">{product.name}</span>
              </button>
              {selectedIndex === idx && (
                <div className="mt-4 bg-white/80 rounded-xl p-4 shadow-inner border border-gray-200">
                  {/* <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority
                    />
                  </div> */}
                  {/* <h3 className="text-xl font-bold text-[#ff3131] mb-1">{product.name}</h3> */}
                  {product.description && (
                    <p className="text-gray-700 mb-1">{product.description}</p>
                  )}
                  {product.price && (
                    <p className="text-base font-semibold text-gray-900 mb-1">Price: {product.price}</p>
                  )}
                  {product.variants && Array.isArray(product.variants) && product.variants.length > 0 && (
                    <div className="mt-2 w-full">
                      <h4 className="font-semibold text-gray-800 mb-1">Variants:</h4>
                      <ul className="list-disc list-inside text-gray-700">
                        {product.variants.map((v, i: number) => (
                          <li key={i}>{v.label}: {v.price}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </aside>

          

</div>
    </div>
    </div>
  );
}
