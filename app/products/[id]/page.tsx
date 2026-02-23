// app/products/[id]/page.tsx
'use client';

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useState, use } from 'react';
import { useCart } from '../../context/CartContext';
import { products } from '../../lib/data';
import Link from 'next/link';

interface ProductDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const { id } = use(params);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const handleQuantityChange = (type: 'increment' | 'decrement') => {
    if (type === 'increment') {
      setQuantity((prev) => prev + 1);
    } else if (type === 'decrement' && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      imageUrl: product.imageUrl,
    });
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start">
          {/* Image Gallery */}
          <div className="flex flex-col">
            <div className="relative h-[500px] w-full overflow-hidden rounded-3xl shadow-2xl border border-gray-100">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 font-serif mb-4">
              {product.name}
            </h1>
            
            <div className="mt-3">
              <p className="text-3xl text-emerald-600 font-bold">Rs. {product.price.toLocaleString()}</p>
            </div>

            <div className="mt-6">
              <div className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
                {product.description}
              </div>
            </div>

            <div className="mt-10">
              <div className="flex items-center space-x-6 mb-8">
                <span className="text-lg font-bold text-gray-900">Quantity</span>
                <div className="flex items-center border-2 border-emerald-100 rounded-2xl overflow-hidden bg-emerald-50/30">
                  <button
                    onClick={() => handleQuantityChange('decrement')}
                    className="p-3 text-emerald-700 hover:bg-emerald-100 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="px-6 py-2 text-xl font-bold text-gray-800 min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange('increment')}
                    className="p-3 text-emerald-700 hover:bg-emerald-100 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>

              <button 
                onClick={handleAddToCart}
                className="w-full bg-emerald-600 border border-transparent rounded-full py-4 px-8 flex items-center justify-center text-xl font-bold text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-300 shadow-xl hover:scale-[1.02]"
              >
                Add to Bag
              </button>
            </div>

            <div className="mt-12 border-t border-gray-100 pt-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Premium Ingredients</h3>
              <div className="grid grid-cols-2 gap-4">
                {product.ingredients.map((ingredient, index) => (
                  <div key={index} className="flex items-center text-gray-700 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <svg className="h-5 w-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">{ingredient}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-24 px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 font-serif">Customer Experiences</h2>
              <div className="flex items-center mt-4">
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
                <span className="ml-3 text-lg font-bold text-gray-900">4.9 / 5.0</span>
                <span className="ml-3 text-gray-500 font-medium">Based on 120+ reviews</span>
              </div>
            </div>
            <Link href="/contact" className="bg-white border-2 border-emerald-600 text-emerald-700 font-bold py-3 px-8 rounded-full hover:bg-emerald-50 transition-colors text-center">
              Write a Review
            </Link>
          </div>

          {product.reviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {product.reviews.map((review) => (
                <div key={review.id} className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-gray-100 hover:border-emerald-200 transition-colors duration-300">
                  <div className="flex items-center mb-6">
                    <div className="h-14 w-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xl font-extrabold mr-4 border-4 border-white shadow-sm">
                      {review.author[0]}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{review.author}</p>
                      <div className="text-yellow-400 text-sm">{'★'.repeat(review.rating)}{'☆'.repeat(5-review.rating)}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic text-lg leading-relaxed mb-4">"{review.comment}"</p>
                  <p className="text-emerald-600 font-bold text-sm uppercase tracking-widest">Verified Purchase</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-[3rem]">
              <p className="text-gray-500 text-xl font-medium">No reviews yet. Be the first to share your journey!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
