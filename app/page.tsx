import Image from 'next/image';
import Link from 'next/link';
import { products } from './lib/data';
import ProductCard from './components/ProductCard';

export default function Home() {
  // PEHLE YAHAN (0, 3) THA, ISLIYE NIGHT CREAM NAHI AA RAHI THI. AB 6 KAR DIYA HAI.
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero/hero-model.jpg"
            alt="Glowvera Skincare Hero"
            fill
            className="object-cover opacity-90 transition-transform duration-500 hover:scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold mb-6 tracking-widest uppercase">
              Premium Organic Skincare
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1] mb-6 font-serif">
              Nourish Your Skin, <br />
              <span className="text-emerald-600">Illuminate</span> Your Beauty.
            </h1>
            <p className="text-base text-gray-600 mb-10 leading-relaxed max-w-lg">
              Discover the power of nature combined with advanced science. From dull to bright, our formulas are designed for your radiant glow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/products" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl text-center"
              >
                Shop Collection
              </Link>
              <Link 
                href="/about" 
                className="bg-white/80 backdrop-blur-sm hover:bg-white text-emerald-700 border-2 border-emerald-600 font-bold py-3 px-8 rounded-full transition-all duration-300 text-center"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">Our Full Collection</h2>
            <div className="h-1.5 w-24 bg-emerald-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">Visible results from dull to bright. Formulated with premium ingredients.</p>
          </div>
          
          {/* AB YAHAN SAARI 6 PRODUCTS NAZAR AAYENGI */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProducts.map((product) => (
              <div key={product.id} className="flex flex-col">
                <ProductCard {...product} />
                {/* Ingredients display logic */}
                <div className="px-6 pb-6 bg-white rounded-b-[2rem] -mt-2">
                   <p className="text-xs font-bold text-emerald-600 uppercase tracking-tighter mb-1">Key Ingredients:</p>
                   <p className="text-xs text-gray-500 italic">
                     {product.ingredients?.join(', ') || 'Natural extracts'}
                   </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link href="/products" className="inline-flex items-center gap-2 text-lg font-bold text-emerald-700 hover:text-emerald-800 transition-colors">
              Explore All Products 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16 font-serif">Trust & Transformation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-emerald-50 p-10 rounded-[3rem] relative shadow-sm">
              <div className="absolute -top-6 left-10 text-6xl text-emerald-200 font-serif">"</div>
              <p className="text-gray-700 italic text-lg leading-relaxed mb-6">"The Advanced Night Cream is amazing. I wake up with bright, white skin every morning. Truly ageless beauty!"</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-emerald-200 rounded-full flex items-center justify-center font-bold text-emerald-700">JD</div>
                <div>
                  <p className="font-bold text-gray-800">Jane Doe</p>
                  <p className="text-emerald-600 text-sm font-semibold">Verified Customer</p>
                </div>
              </div>
            </div>
            <div className="bg-emerald-50 p-10 rounded-[3rem] relative shadow-sm">
              <div className="absolute -top-6 left-10 text-6xl text-emerald-200 font-serif">"</div>
              <p className="text-gray-700 italic text-lg leading-relaxed mb-6">"Visible results from dull to bright in just 2 weeks. The Serum and Day Cream are my favorites."</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-emerald-200 rounded-full flex items-center justify-center font-bold text-emerald-700">EC</div>
                <div>
                  <p className="font-bold text-gray-800">Emily Chen</p>
                  <p className="text-emerald-600 text-sm font-semibold">Verified Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}