"use client";
import React, { useEffect, useMemo, useState } from 'react';
//import { getAllProducts } from '@/lib/products-data';
import { Product } from '@/lib/types';
import { Categories } from '@/lib/types';
//import { categories as categoryList } from '@/lib/categories-data';
import { Category as categoryList } from '@/lib/category-new';
//import { Search, MapPin, ShoppingCart, Plus } from 'lucide-react';
import { Plus, X } from 'lucide-react';
import Image from 'next/image';
//import Link from 'next/link';

const ProductsPage = () => {
const [categories, setCategories] = useState<Categories[]>([]);
//const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
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

  // Open product detail modal
  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Close product detail modal
  const closeProductModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
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
                      className="border border-gray-200 rounded-lg overflow-hidden bg-white cursor-pointer transition-shadow"
                      onClick={() => toggleCategory(category.name)}
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
                          <span className="ml-2 p-2 rounded-full border border-gray-300 bg-white">
                            <Image
                              src="/images/icon/Group.png"
                              alt="Expand icon"
                              height={32}
                              width={32}
                              className={`transform transition-transform duration-300 rotate-0`}
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
                            <div key={product.name || idx} className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden flex flex-col min-w-[220px] max-w-[240px]">
                              <Image
                                src={product.image}
                                alt={product.name}
                                width={180}
                                height={140}
                                className="object-cover w-full h-36 rounded-t-lg"
                              />
                              <div className="flex-1 flex flex-col justify-between p-4">
                                <div>
                                  <h3 className="font-semibold text-gray-900 text-lg mb-1 leading-tight">
                                    {product.name}
                                  </h3>
                                  
                                    <p className="text-sm text-gray-600 leading-relaxed mb-2 line-clamp-2">
                                 {product.description}
                                    </p>
                                 
                                </div>
                                <div className="flex justify-between item-cetre mt-2">
                                  <p className='font-bold'>{ product.price}</p>
                              
                                    <button
                                      onClick={() => openProductModal(product)}
                                      className="w-8 h-8 bg-[#ff3131] hover:bg-[#ff3131]/80 text-white rounded-full flex items-center justify-center transition-colors shadow-md"
                                    >
                                      <Plus className="w-4 h-4" />
                                    </button>
                                
                                </div>
                              </div>
                            </div>
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

      {/* Product Detail Modal */}
      {isModalOpen && selectedProduct && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={handleBackdropClick}
        >
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Product Details</h2>
              <button
                onClick={closeProductModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Product Image */}
              <div className="mb-6">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedProduct.name}
                  </h3>
                  {/* <p className="text-sm text-gray-500 mb-2">
                    Category: {selectedProduct.type}
                  </p> */}
                </div>

                {selectedProduct.description && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>
                )}

                {/* Additional Details */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Product Information</h4>
                  <div className="space-y-2 text-sm">
                    {/* <div className="flex justify-between">
                      <span className="text-gray-600">Product ID:</span>
                      <span className="font-medium">#{selectedProduct.id}</span>
                    </div> */}
                    {/* <div className="flex justify-between">
                      <span className="text-gray-600">Category:</span>
                      <span className="font-medium">{selectedProduct.category}</span>
                    </div> */}
                    <div className="flex justify-between">
                      <span className="text-gray-600">Availability:</span>
                      <span className="font-medium text-green-600">In Stock</span>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">How to Order</h4>
                  <p className="text-blue-800 text-sm">
                    Contact us directly for pricing and ordering information. 
                    We offer custom designs and special requests for all occasions.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex gap-3 p-6 border-t border-gray-200">
              <button
                onClick={closeProductModal}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  // Add to cart functionality can be implemented here
                  closeProductModal();
                }}
                className="flex-1 px-4 py-2 bg-[#ff3131] text-white rounded-lg hover:bg-[#ff3131]/70 transition-colors"
              >
                Contact for Order
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsPage;
