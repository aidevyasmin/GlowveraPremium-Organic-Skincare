// app/products/page.tsx
import ProductCard from '../components/ProductCard';
import { products } from '../lib/data';

export default function ProductsPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-5xl font-bold text-emerald-700 text-center mb-12 font-serif">Our Collections</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
