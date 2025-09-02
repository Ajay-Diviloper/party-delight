/* eslint-disable @typescript-eslint/no-explicit-any */
import { Category } from '@/lib/category-new'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Link from 'next/link';

import ProductEnquiryModal from './ProductEnquiryModal';
import Banner from '@/components/Banner';
//import RelatedProductsSlider from './RelatedProductsSlider';
//import { ArrowLeft } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import OurTestimonials from '@/components/AboutComponents/OurTestimonials';

export default async function ProductPage({ params }: { params: Promise<any> }) {
  const { slug } = await params;
  
  // Find the product in the category data
  let product = null;
  let productCategory = null;
  
  // Helper to slugify product names for matching
  function slugify(str: string) {
    return str
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/\+/g, '+')
      .replace(/[^a-z0-9-+()]/g, '')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  }

  for (const category of Category) {
    const foundProduct = category.products?.find(p => {
      if (p.slug) return p.slug === slug;
      return slugify(p.name) === slug;
    });
    if (foundProduct) {
      product = foundProduct;
      productCategory = category;
      break;
    }
  }
  
  if (!product) {
    notFound();
  }

  // Get related products from the same category
  // const relatedProducts = productCategory?.products?.filter(p => 
  //   p.name !== product.name
  // ) || [];

  return (
    <div className="w-full max-w-8xl mx-auto font-sans bg-gradient-to-b from-white to-gray-50">
      <Banner title={product.name} subtitle={product.description || ''} />
      {/* Breadcrumbs */}
      <nav className="text-sm text-grey mb-12 pt-4 flex items-center gap-2 justify-center font-sans max-w-5xl mx-auto px-2 sm:px-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline text-dark-brown font-bold text-[15px] cursor-pointer">Home</Link>
        <span className="mx-1">/</span>
        <Link href="/products" className="hover:underline text-dark-brown text-[15px] font-bold  cursor-pointer">Menu</Link>
        {productCategory && (
          <>
            <span className="mx-1">/</span>
            <Link href={`/category/${productCategory.slug}`} className="hover:underline text-dark-brown text-[15px] font-bold  cursor-pointer">{productCategory.name}</Link>
          </>
        )}
        <span className="mx-1">/</span>
        <span className="text-black font-semibold">{product.name}</span>
      </nav>

      {/* Back Button
      <div className="max-w-5xl mx-auto px-2 sm:px-6 -mt-6 mb-6 flex justify-center md:justify-start">
        <Link
          href={productCategory ? `/products?category=${productCategory.slug}` : '/products'}
          className="inline-flex items-center gap-2 border border-[#ff3131] text-[#ff3131] px-4 py-2 rounded-lg hover:bg-[#ff3131] hover:text-white transition-colors shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
      </div> */}

      
      <div className="w-full flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-center justify-center px-4 sm:px-6 md:px-8 pb-12">
        {/* Left: Product Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
          <div
            className="group relative w-full max-w-[700px] aspect-[7/5] overflow-hidden rounded-2xl shadow-md ring-1 ring-gray-100 bg-white"
            style={{ minHeight: '320px', minWidth: '0', height: '100%', width: '100%' }}
          >
       <Image
  src={product.image}
  alt={product.name}
  fill
  className="transition-transform duration-300 ease-in-out object-cover object-top w-full h-full group-hover:scale-105"
  style={{ touchAction: 'manipulation', objectPosition: 'bottom center' }}
/>

            <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-black/5"></div>
          </div>
        </div>
        {/* Right: Product Details */}
        <div className="w-full md:w-1/2 max-w-2xl mx-auto md:mx-0 flex flex-col gap-6 items-center md:items-start justify-center self-center bg-white rounded-2xl shadow-md ring-1 ring-gray-100 p-6 md:min-h-[380px]">
          <h1 className="text-3xl md:text-4xl font-heading text-dark-brown text-center md:text-left font-semibold w-full tracking-tight">{product.name}</h1>
          {/* Show variants table if present, else show price */}
          {Array.isArray(product.variants) && product.variants.length > 0 ? (
            <div className="w-full">
              <table className="w-full border border-gray-200 rounded-lg overflow-hidden mb-2">
                <thead className="bg-[#ff3131]/10">
                  <tr>
                    <th className="px-4 py-2 text-left text-dark-brown font-semibold text-base">Variant</th>
                    <th className="px-4 py-2 text-left text-dark-brown font-semibold text-base">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {product.variants.map((variant, idx) => (
                    <tr key={idx} className="border-t border-gray-100">
                      <td className="px-4 py-2 text-dark-brown text-base">{variant.label}</td>
                      <td className="px-4 py-2 text-[#ff3131] font-semibold text-base">{variant.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : product.price && (
            <div className="text-center md:text-left w-full">
              <span className="inline-block bg-[#ff3131]/10 text-[#ff3131] px-3 py-1 rounded-full text-lg font-semibold">Price : {product.price}</span>
            </div>
          )}
{product.description && (
  <p className="font-sans text-grey text-base md:text-lg leading-relaxed text-center md:text-left w-full capitalize">
    {product.description}
  </p>
)}
         
          <div className="flex flex-wrap gap-3 justify-center md:justify-start w-full">
            {productCategory && (
              <span className="text-white px-3 py-1 rounded-full text-xs font-semibold bg-[#ff3131] shadow-sm">{productCategory.name}</span>
            )}
            {productCategory?.type && (
              <span className="text-white px-3 py-1 rounded-full text-xs font-semibold bg-[#ff3131] shadow-sm">{productCategory.type}</span>
            )}
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 w-full">
            <ProductEnquiryModal productName={product.name} />
            <Link
              href={productCategory ? `/category/${productCategory.slug}` : '/products'}
              className="hover:bg-black text-white font-heading px-8 py-3 rounded-full text-base tracking-wide bg-[#ff3131] transition"
            >
              Continue browsing
            </Link>
          </div>
        </div>
      </div>
      {/* Related Products Slider */}
      {/* <RelatedProductsSlider relatedProducts={relatedProducts} /> */}
       <OurTestimonials />
    </div>
  )
}
