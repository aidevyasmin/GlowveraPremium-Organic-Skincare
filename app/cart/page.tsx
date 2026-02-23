'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, addToCart, getCartTotal, clearCart } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="container mx-auto py-20 px-4 min-h-[60vh]">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto py-20 px-4 text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8 text-lg">Looks like you haven't added anything to your cart yet.</p>
        <Link 
          href="/products" 
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  const handleUpdateQuantity = (id: string, name: string, price: number, imageUrl: string, delta: number) => {
    addToCart({
      id,
      name,
      price,
      quantity: delta,
      imageUrl
    });
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center font-serif">Your Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Cart Items List */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {cart.map((item) => (
                <li key={item.id} className="p-6 flex flex-col sm:flex-row items-center gap-6">
                  <div className="relative h-24 w-24 flex-shrink-0">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="flex-grow text-center sm:text-left">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.name}</h3>
                    <p className="text-emerald-600 font-bold text-lg">Rs. {item.price.toLocaleString()}</p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-gray-300 rounded-full">
                      <button
                        onClick={() => {
                          if (item.quantity > 1) {
                            handleUpdateQuantity(item.id, item.name, item.price, item.imageUrl, -1);
                          } else {
                            removeFromCart(item.id);
                          }
                        }}
                        className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-l-full"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 border-l border-r border-gray-300 text-gray-800 min-w-[40px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleUpdateQuantity(item.id, item.name, item.price, item.imageUrl, 1)}
                        className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-r-full"
                      >
                        +
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 p-2"
                      title="Remove item"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="p-6 bg-gray-50 flex justify-between items-center">
              <button 
                onClick={clearCart}
                className="text-gray-500 hover:text-red-600 transition-colors duration-300 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Clear Cart
              </button>
              <Link href="/products" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                &larr; Continue Shopping
              </Link>
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>Rs. {getCartTotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="text-emerald-600 font-semibold">FREE</span>
              </div>
              <div className="flex justify-between text-gray-600 border-b border-gray-100 pb-4">
                <span>Estimated Tax (GST 0%)</span>
                <span>Rs. 0</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-gray-800 pt-2">
                <span>Total Amount</span>
                <span>Rs. {getCartTotal().toLocaleString()}</span>
              </div>
            </div>
            
            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-full transition-colors duration-300 shadow-md">
              Proceed to Checkout
            </button>
            <p className="text-center text-gray-400 text-xs mt-4">Secure payment powered by Stripe</p>
          </div>
        </div>
      </div>
    </div>
  );
}
