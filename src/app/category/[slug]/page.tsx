/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Category as CategoriesList } from '@/lib/category-new';
import { useState, useMemo } from 'react';
import { Info } from 'lucide-react';


export default function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [search, setSearch] = useState('');
  const category = CategoriesList.find((c) => c.slug === slug);
  if (!category) {
    notFound();
  }

  const normalizedSearch = search.trim().toLowerCase();
  const filteredProducts = useMemo(() => {
    if (!normalizedSearch) return category.products || [];
    return (category.products || []).filter(
      (p) =>
        p.name.toLowerCase().includes(normalizedSearch) ||
        (p.description && p.description.toLowerCase().includes(normalizedSearch))
    );
  }, [category.products, normalizedSearch]);

  return (
    <>
      <div className="bg-white border-b border-gray-200 py-4 w-full md:w-[90%] mx-auto">
        <div className="container mx-auto flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between gap-4 w-full px-4">
<h3 className="flex flex-wrap items-center gap-2 text-lg font-heading">
  <Link href="/" className="px-3 py-1 rounded-full bg-gray-100 text-[#ff3131] font-bold">Home</Link>
  <span className="text-gray-400">›</span>
  <Link href="/products" className="px-3 py-1 rounded-full bg-gray-100 text-[#ff3131] font-bold">Menu</Link>
  <span className="text-gray-400">›</span>
  <span className="px-3 py-1 rounded-full bg-[#ff3131] text-white font-bold">{category.name}</span>
</h3>


          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50 w-full md:w-auto">
            <input
              type="text"
              placeholder={`Search ${category.name}...`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none text-sm w-full md:w-64"
            />
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200 py-4 w-full md:w-[90%] mx-auto">
        <div className='container mx-auto flex gap-3 flex-col md:flex-row items-center md:justify-between justify-center px-4'> 
        {filteredProducts.length === 0 ? (
          <div className="text-center text-gray-500 py-12 text-lg">No products found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, idx: number) => {
              const slugified = (product.slug || product.name.toLowerCase().replace(/\s+/g, '-')) as string;
              return (
                <Link
                  key={product.name || idx}
                  href={`/products/${slugified}`}
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white transition-shadow block hover:shadow-lg hover:scale-[1.02] focus:outline-none"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex-1 flex flex-col">
                
                    <h3 className="font-semibold text-gray-900 text-lg mb-1 line-clamp-1">{product.name}</h3>
                    {product.description && (
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3 capitalize">{product.description}</p>
                    )}
                    {product.price && (
  <div className="flex justify-between items-center">
  <p className='font-bold text-sm'> <span className='font-semibold'>Price: </span> {product.price}</p>
  <div className="flex gap-2">
    <div
    
      className="px-2   text-white rounded-lg transition-colors font-medium text-xl"
    >
     <Info size={25} className='text-[#ff3131]' />
   </div>
  </div>
</div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        )}
        </div>
      </div>
    </>
  );
}


