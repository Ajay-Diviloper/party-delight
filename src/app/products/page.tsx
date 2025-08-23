"use client";
import React, { useEffect, useMemo, useState } from 'react';
//import { getAllProducts } from '@/lib/products-data';
import { Categories } from '@/lib/types';
//import { categories as categoryList } from '@/lib/categories-data';
import { Category as categoryList } from '@/lib/category-new';
//import { Search, MapPin, ShoppingCart, Plus } from 'lucide-react';
import { Info, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ProductsPage = () => {
const [categories, setCategories] = useState<Categories[]>([]);
//const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Categories | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
 // const [orderSummaryOpen, setOrderSummaryOpen] = useState(false);
  //const [cart, setCart] = useState<{ [key: number]: number }>({});

  // After products are loaded, filter categories to only those with products
//  const categoriesWithProducts = useMemo(() => categoryList.filter(cat => categories.some(p => p.category === cat.name)), [products]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
  setCategories(categoryList);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  // No need to expand all categories on load; show all collapsed

  // Search handling
  const normalizedSearch = search.trim().toLowerCase();
  const filteredCategories = useMemo(() => {
    if (!normalizedSearch) return categories;
    const result: Categories[] = [];
    for (const cat of categories) {
      const catNameMatch = cat.name.toLowerCase().includes(normalizedSearch);
      const products = (cat.products || []).filter((p) =>
        p.name.toLowerCase().includes(normalizedSearch) ||
        (p.description && p.description.toLowerCase().includes(normalizedSearch))
      );
      if (catNameMatch || products.length > 0) {
        result.push({ ...cat, products });
      }
    }
    return result;
  }, [categories, normalizedSearch]);

  // Auto-expand matching categories when searching
  useEffect(() => {
    if (normalizedSearch) {
      setExpandedCategories(filteredCategories.map((c) => c.name));
    } else {
      setExpandedCategories([]);
    }
  }, [normalizedSearch, filteredCategories]);

  // Toggle category expansion (multi-expand)
  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(cat => cat !== categoryName)
        : [...prev, categoryName]
    );
  };

  // Open products modal for a category
  const openCategoryProductsModal = (category: Categories) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  // Close product detail modal
  const closeProductModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  // Close modal on backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeProductModal();
    }
  };

  // Cart functions
  // const addToCart = (productId: number) => {
  //   setCart(prev => ({
  //     ...prev,
  //     [productId]: (prev[productId] || 0) + 1
  //   }));
  // };

  // const removeFromCart = (productId: number) => {
  //   setCart(prev => {
  //     const newCart = { ...prev };
  //     if (newCart[productId] > 1) {
  //       newCart[productId] -= 1;
  //     } else {
  //       delete newCart[productId];
  //     }
  //     return newCart;
  //   });
  // };

  // const getCartItemCount = () => {
  //   return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  // };

  // const getCartItems = () => {
  //   return Object.entries(cart).map(([productId, quantity]) => {
  //     const product = products.find(p => p.id === parseInt(productId));
  //     return { product, quantity };
  //   }).filter(item => item.product);
  // };

  return (
    <>
      {/* Top Bar */}
      {/* <div className="bg-gray-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <span className="font-heading text-lg">Party Delight</span>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-800 rounded">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded relative">
              <ShoppingCart className="w-5 h-5" />
              {getCartItemCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartItemCount()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div> */}

      {/* Main Header */}
      <div className="bg-white border-b border-gray-200 py-4 w-full md:w-[90%] mx-auto">
        <div className="container mx-auto flex gap-3 flex-col md:flex-row items-center md:justify-between justify-center px-4">
          <h1 className="font-heading text-xl md:text-2xl font-bold text-[#ff3131]">Party Delights</h1>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50 w-full md:w-auto">
            {/* <Search className="w-4 h-4 text-gray-500 mr-2" /> */}
            <input
              type="text"
              placeholder="Search menu..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none text-sm w-full md:w-64"
            />
          </div>
        </div>
      </div>

      {/* Location Banner */}
      {/* <div className="bg-blue-600 text-white py-3 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">You are ordering from Party Delight Bakery - Surrey Location. Pickup</span>
          </div>
          <button className="text-sm underline hover:no-underline">Change</button>
        </div>
      </div> */}

      {/* Order Summary */}
      {/* <div className="bg-white border-b border-gray-200 py-3 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h2 className="font-semibold text-gray-900">Your Order</h2>
            <p className="text-sm text-gray-600">{getCartItemCount()} items</p>
          </div>
          <button
            onClick={() => setOrderSummaryOpen(!orderSummaryOpen)}
            className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200"
          >
            View Order
          </button>
        </div>
      </div> */}

      {/* Expanded Order Summary */}
      {/* {orderSummaryOpen && (
        <div className="bg-white border-b border-gray-200 py-4 px-4">
          <div className="container mx-auto">
            {Object.keys(cart).length === 0 ? (
              <p className="text-gray-500 text-center py-4">Your order is empty</p>
            ) : (
              <div className="space-y-3">
                {getCartItems().map(({ product, quantity }) => {
                  if (!product) return null;
                  return (
                    <div key={product.id} className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-3">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-medium text-sm">{product.name}</h3>
                          <p className="text-xs text-gray-600">Quantity: {quantity}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm"
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-sm">{quantity}</span>
                        <button
                          onClick={() => addToCart(product.id)}
                          className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  );
                })}
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total Items</span>
                    <span className="font-semibold">{getCartItemCount()}</span>
                  </div>
                  <button className="w-full bg-[#ff3131] text-white py-2 rounded-lg mt-3 font-medium hover:bg-[#ff3131]/70">
                    Proceed to Order
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )} */}

      {/* Main Content */}
      <div className="w-full md:w-[90%] container mx-auto px-4 py-4 md:py-6">
        {loading ? (
          <div className="text-center text-lg font-sans py-8">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {/* Render all categories in a grid, and expand each in place if open */}
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
              {filteredCategories.map((category) => (
                <React.Fragment key={category.name}>
                  {!expandedCategories.includes(category.name) ? (
                    <div
                      onClick={() => openCategoryProductsModal(category)}
                      className="border border-gray-200 rounded-lg overflow-hidden bg-white transition-shadow block hover:shadow-lg hover:scale-[1.02] focus:outline-none"
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="flex flex-col items-center p-6">
                        <Image
                          src={category.image || "/images/icon/Group.png"}
                          alt={category.name}
                          width={260}
                          height={200}
                          className="object-cover rounded-lg mb-4 w-full h-56"
                        />
                        <div className="flex items-center justify-between w-full">
                          <h2 className="text-2xl font-serif font-semibold text-gray-900">
                            {category.name}
                          </h2>
                          <span
                            className="ml-2 p-2 rounded-full border border-gray-300 bg-white hover:bg-gray-50 transition-all duration-300 hover:scale-110 cursor-pointer"
                          >
                            <Image
                              src="/images/icon/Group.png"
                              alt="View products"
                              height={32}
                              width={32}
                              className="transform transition-transform duration-300"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col md:flex-row w-full gap-4 col-span-full">
                      {/* Expanded category card */}
                      <div className="border border-gray-200 rounded-lg bg-white flex flex-col items-center justify-between p-6 min-w-[260px] max-w-[320px]">
                        <Image
                          src={category.image || "/images/icon/Group.png"}
                          alt={category.name}
                          width={260}
                          height={200}
                          className="object-cover rounded-lg mb-4 w-full h-56"
                        />
                        <div className="flex items-center justify-between w-full">
                          <h2 className="text-2xl font-serif font-semibold text-gray-900">
                            {category.name}
                          </h2>
                          <button
                            onClick={() => toggleCategory(category.name)}
                            className="ml-2 p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-transform"
                            aria-label={`Collapse ${category.name}`}
                          >
                            <Image
                              src="/images/icon/Group.png"
                              alt="Collapse icon"
                              height={32}
                              width={32}
                              className="transform rotate-180 transition-transform duration-300"
                            />
                          </button>
                        </div>
                      </div>
                      {/* Products for expanded category */}
                      <div className="flex-1  border border-gray-200 rounded-lg bg-gray-50 p-6 overflow-x-auto">
                        <div className="flex flex-row gap-6">
                                                     {(category.products || []).map((product, idx: number) => (
                             <Link 
                               href={`/products/${product.slug || product.name.toLowerCase().replace(/\s+/g, '-')}`}
                               key={product.name || idx} 
                               className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col min-w-[220px] max-w-[240px] cursor-pointer transform hover:scale-105"
                             >
                               <div className="relative">
                                 <Image
                                   src={product.image}
                                   alt={product.name}
                                   width={180}
                                   height={140}
                                   className="object-cover w-full h-36 rounded-t-lg"
                                 />
                                 {/* <div className="absolute top-2 right-2">
                                   <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                                     View Details
                                   </span>
                                 </div> */}
                               </div>
                               <div className="flex-1 flex flex-col justify-between p-4">
                                 <div>
                                   <h3 className="font-semibold text-gray-900 text-lg mb-1 leading-tight">
                                     {product.name}
                                   </h3>
                                   <p className="text-sm text-gray-600 leading-relaxed mb-2 line-clamp-2">
                                     {product.description}
                                   </p>
                                 </div>
                                 <div className="flex justify-between items-center mt-2">
                                   <p className='font-bold text-lg text-[#ff3131]'>{product.price}</p>
                                   <button
                                     onClick={(e) => {
                                       e.preventDefault();
                                       // Add to cart functionality can be implemented here
                              

                                     }}
                                     className="px-3 py-1 bg-[#ff3131] hover:bg-[#ff3131]/80 text-white rounded-lg transition-colors font-medium text-sm"
                                   >
                                      <Info size={20} />
                                   </button>
                                 </div>
                               </div>
                             </Link>
                           ))}
                        </div>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Category Products Modal */}
      {isModalOpen && selectedCategory && (
        <div 
          className="fixed inset-0 bg-black/70 bg-opacity-60 flex items-center justify-center z-50 px-6 py-3 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300 scale-100">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-[#ff3131] to-[#ff6b6b] text-white rounded-t-xl">
              <div className="flex items-center gap-4">
                <Image
                  src={selectedCategory.image || "/images/icon/Group.png"}
                  alt={selectedCategory.name}
                  width={48}
                  height={48}
                  className="rounded-lg object-cover"
                />
                <h2 className="text-2xl font-bold">{selectedCategory.name}</h2>
              </div>
              <button
                onClick={closeProductModal}
                className="text-white hover:text-gray-200 transition-colors p-1 rounded-full hover:bg-white hover:bg-opacity-20"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                 {(selectedCategory.products || []).map((product, idx: number) => (
                   <Link 
                     href={`/products/${product.slug || product.name.toLowerCase().replace(/\s+/g, '-')}`}
                     key={product.name || idx} 
                     className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col transform hover:scale-105 cursor-pointer"
                     onClick={() => closeProductModal()}
                   >
                     <div className="relative">
                     <Image
  src={product.image}
  alt={product.name}
  width={200}
  height={150}
  className="object-cover object-[center_30%] w-full h-48 rounded-t-lg"
/>
                       {/* <div className="absolute top-2 right-2">
                         <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                           View Details
                         </span>
                       </div> */}
                     </div>
                     <div className="flex-1 flex flex-col justify-between p-4">
                       <div>
                         <h3 className="font-semibold text-[#ff3131] text-lg mb-2 leading-tight">
                           {product.name}
                         </h3>
                         <p className="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-3">
                           {product.description}
                         </p>
                       </div>
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
                     </div>
                   </Link>
                 ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex md:flex-row flex-col gap-4 p-6 border-t border-gray-200 bg-gray-50 rounded-b-xl">
              <button
                onClick={closeProductModal}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Close
              </button>
              <Link
  href="/contact"
  className="flex-1 px-6 py-3 bg-[#ff3131] text-white rounded-lg hover:bg-[#ff3131]/80 transition-colors font-medium shadow-lg text-center"
>
  Contact for All Products
</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsPage;
