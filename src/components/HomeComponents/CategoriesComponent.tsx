import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Category } from '@/lib/category-new';

// const categories = [
//   {
//     title: 'Cakes & Cupcakes',
//     img: '/images/products-category-images/chantilly.webp',
//     number: '01.',
//     link: '/category/cakes-cupcakes',
//   },
//   {
//     title: 'Cookies',
//     img: '/images/products-category-images/chunkie-monkey-choco-chunk.webp',
//     number: '02.',
//     link: '/category/cookies',
//   },
//   {
//     title: 'Muffins',
//     img: '/images/products-category-images/morning-glory.webp',
//     number: '03.',
//     link: '/category/muffins',
//   },
//   {
//     title: 'Scones',
//     img: '/images/products-category-images/apple-cinnamon-pecan.webp',
//     number: '04.',
//     link: '/category/scones',
//   },
//   {
//     title: 'Pies',
//     img: '/images/products-category-images/apple-pie.webp',
//     number: '05.',
//     link: '/category/pies',
//   },
//   {
//     title: 'Cake Jars',
//     img: '/images/products-category-images/bunny-in-a-burrow-carrot-cake-cream-cheese-caramel-pecans.webp',
//     number: '06.',
//     link: '/category/cake-jars',
//   },
// ];


const CategoriesComponent = () => {

  const filterCategory = Category
  .filter((cat) => cat.type === "dessert")
  .slice(0, 6);

  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-normal text-gray-900 mb-4">
          Explore Our World of Desserts
          </h2>
          <p className="text-lg text-gray-600  mx-auto">
          Enjoy a curated collection of irresistible cakes, cookies, and seasonal specialties.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filterCategory.map((cat, idx) => (
            <Link
              key={cat.name}
               href={`/category/${cat.slug}`}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-72 md:h-78 overflow-hidden">

                   {/* <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={400}
                                    height={200}
                                    className="w-full h-68 object-cover"
                                  /> */}

                                       <Image
                                            src={cat.image}
                                            alt={cat.name}
                                              width={400}
                                                                      height={200}
                                                                       priority={idx < 3}
                                                  className="w-full h-78 object-cover rounded-t-lg"
                                          />
                {/* <Image
                  src={cat.image}
                  alt={cat.name}
              width={400}
                                    height={300}
                  className=" w-full h-78 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  priority={idx < 3}
                /> */}
                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" /> */}
                
                {/* Number Badge */}
                {/* <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-900">{cat.number}</span>
                </div>*/}
              </div> 

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg text-center md:text-left md:text-xl font-heading font-semibold  text-black mb-3 line-clamp-2 group-hover:text-primary-red transition-colors duration-300">
                  {cat.name}
                </h3>
                
                {/* Shop Now Button */}
                <div className="flex items-center md:justify-start justify-center">
                  <span className="text-sm  text-[#ff3131] font-semibold group-hover:text-primary-red transition-colors duration-300">
                  Explore More
                  </span>
                  <div className="w-6 h-6 rounded-full bg-gray-100  group-hover:bg-primary-red transition-colors duration-300 flex items-center justify-center">
                    <svg 
                      className="w-3 h-3 text-[#ff3131] group-hover:underline transition-colors duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-red/20 rounded-lg transition-colors duration-300 pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            href="/products"
            className="inline-flex items-center px-8 py-3 bg-[#ff3131] md:bg-[#ff3131] text-white font-medium rounded-lg  transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            View All Categories
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesComponent
