// app/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { getCartCount } = useCart();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-emerald-600">
          Glowvera
        </Link>
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-emerald-600 transition-colors duration-300">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-emerald-600 transition-colors duration-300">
            About
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-emerald-600 transition-colors duration-300">
            Products
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-emerald-600 transition-colors duration-300">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-emerald-600 transition-colors duration-300">
            Contact
          </Link>
          
          <Link href="/cart" className="relative text-gray-700 hover:text-emerald-600 transition-colors duration-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {mounted && getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
