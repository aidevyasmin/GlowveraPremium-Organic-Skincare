// app/components/ProductCard.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export default function ProductCard({ id, name, description, price, imageUrl }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation if button is inside a Link (though it's not here)
    addToCart({
      id,
      name,
      price,
      quantity: 1,
      imageUrl,
    });
    alert(`${name} added to cart!`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <Link href={`/products/${id}`}>
        <div className="w-full h-48 relative overflow-hidden"> {/* Consistent image sizing and aspect ratio */}
          <Image
            src={imageUrl}
            alt={name}
            fill // Use fill for responsive images in parent div
            className="object-cover transition-transform duration-300 hover:scale-110" // Subtle hover on image itself
            loading="lazy" // Added lazy loading
          />
        </div>
      </Link>
      <div className="p-6">
        <Link href={`/products/${id}`}>
          <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-emerald-600 transition-colors duration-300">
            {name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-emerald-600">Rs. {price.toLocaleString()}</span>
          <button 
            onClick={handleAddToCart}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
