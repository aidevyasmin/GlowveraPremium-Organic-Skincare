// app/blog/page.tsx
import BlogCard from '../components/BlogCard';
import { blogPosts } from '@/app/lib/data';

export default function BlogPage() {
  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-beige-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 text-center mb-16 font-serif">From Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
