"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Category } from "@/lib/category-new"; // products[] must be [{ name, image }]

const AllProducts = () => {
  // Get only savoury categories
  const savouryCategories = Category.filter((c) => c.type === "savoury");

  // Default selected category
  const [selectedCategorySlug, setSelectedCategorySlug] = useState(
    savouryCategories.length > 0 ? savouryCategories[0].slug : null
  );
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(
    null
  );

  // Find current category object
  const currentCategory = savouryCategories.find(
    (c) => c.slug === selectedCategorySlug
  );

  // Get items based on selected subcategory
  const filteredItems = currentCategory
    ? selectedSubCategory
      ? currentCategory.products?.filter(
          (p) => p.name.toLowerCase() === selectedSubCategory.toLowerCase()
        )
      : currentCategory.products || []
    : [];

  const displayedItems = filteredItems?.slice(0, 8);

  return (
    <div className="px-2 sm:px-4 max-w-9xl mx-auto container py-8 sm:py-16">
      {/* Title */}
      <div className="text-center mb-8 sm:mb-12 ">
        <h2 className="text-2xl sm:text-[40px] font-heading">
          Taste Our Savoury Creations
        </h2>
        <p className="text-[#858585] max-w-4xl mx-auto py-4 text-base sm:text-lg font-sans font-light">
          Explore a variety of freshly baked savoury treats, crafted with rich
          flavours and premium ingredients.
        </p>

        {/* Main category tabs */}
        <div className="flex justify-center flex-wrap gap-2 mb-6">
          {savouryCategories.map((cat) => (
            <>            <button
              key={cat.slug}
              onClick={() => {
                setSelectedCategorySlug(cat.slug);
                setSelectedSubCategory(null);
              }}
              className={`px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-lg font-heading rounded transition-colors duration-200 ${
                selectedCategorySlug === cat.slug
                  ? "bg-[#ff3131] text-white font-bold"
                  : "text-[#858585] hover:text-[#ff3131] hover:bg-[#f5eaea]"
              }`}
            >
              {cat.name}
            </button>
            
            </>

          ))}
{/* <button
  className='px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-lg font-heading rounded transition-colors duration-200 text-[#ff3131] font-bold"
        hover:text-[#fff] hover:bg-[#ff3131]'
>View All </button> */}
        </div>

        {/* Subcategory tabs */}
        {/* {currentCategory?.products &&
          currentCategory.products.length > 0 && (
            <div className="flex justify-center flex-wrap gap-2 mb-8">
              {currentCategory.products.map((sub) => (
                <button
                  key={sub.name}
                  onClick={() => setSelectedSubCategory(sub.name)}
                  className={`px-3 py-1 rounded text-sm sm:text-base ${
                    selectedSubCategory === sub.name
                      ? "bg-[#a06e4c] text-white font-bold"
                      : "text-[#858585] hover:text-[#a06e4c] hover:bg-[#f5eaea]"
                  }`}
                >
                  {sub.name}
                </button>
              ))}
            </div>
          )} */}


      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
        {displayedItems?.map((item, idx) => (
          <Card key={idx} product={item} />
        ))}
      </div>
    </div>
  );
};

// Card Component
const Card = ({ product }: { product: { name: string; image: string } }) => {
  return (
    <Link
      href={`/products/${encodeURIComponent(product.name.toLowerCase().replace(/\s+/g, "-"))}`}
      className="bg-white overflow-hidden transition-all duration-300 flex-col h-full cursor-pointer block"
    >
      <div className="relative w-full  flex items-center justify-center ">
    
      
        <Image
          src={product.image}
          alt={product.name}
            width={400}
                                    height={200}
                className="w-full h-78 object-cover rounded-t-lg"
        />
      </div>
      <div className="p-3 sm:p-5 text-center mt-auto flex items-center justify-center">
        <h3 className="text-base sm:text-xl font-heading font-bold text-gray-900 hover:underline">
          {product.name}
        </h3>
      </div>
    </Link>
  );
};

export default AllProducts;