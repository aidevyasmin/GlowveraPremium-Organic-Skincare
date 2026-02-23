// app/blog/[id]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, BlogPost } from '@/app/lib/data';

interface BlogPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <article>
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-serif leading-tight">
              {post.title}
            </h1>
            <div className="h-1.5 w-24 bg-emerald-500 mx-auto rounded-full mb-8"></div>
          </div>

          {/* Main Image */}
          <div className="relative h-[300px] md:h-[500px] w-full overflow-hidden rounded-[2.5rem] mb-12 shadow-2xl">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Section 1 */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap mb-12 font-medium">
            {post.content}
          </div>

          {/* Gallery Images */}
          {post.galleryImages && post.galleryImages.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {post.galleryImages.map((img, index) => (
                <div key={index} className="relative h-80 w-full overflow-hidden rounded-[2rem] shadow-xl hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src={img}
                    alt={`${post.title} gallery ${index + 1}`}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Before & After Section (for Radiant Skin Routine) */}
          {post.id === '2' && (
            <div className="mt-12 mb-12 bg-gradient-to-br from-purple-50 to-pink-50 rounded-[2.5rem] p-8 md:p-12 shadow-lg border border-pink-100">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 font-serif">
                See the Transformation: Radiant Skin Routine
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="relative">
                  <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white group">
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-bold z-10 uppercase">Before</div>
                    <Image
                      src="/products/blog-placeholder.jpg" // REPLACE with your actual 'before' model image path, e.g., /blog-images/before-model.jpg
                      alt="Before Radiant Skin Routine"
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
                <div className="relative">
                  <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white group">
                    <div className="absolute top-4 left-4 bg-pink-600 text-white px-4 py-1 rounded-full text-sm font-bold z-10 uppercase">After 4 Weeks</div>
                    <Image
                      src="/products/blog-placeholder.jpg" // REPLACE with your actual 'after' model image path, e.g., /blog-images/after-model.jpg
                      alt="After Radiant Skin Routine"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-8 text-md italic">
                Experience the visible difference with our recommended Radiant Skin Routine.
              </p>
            </div>
          )}

          {/* Conclusion / Footer */}
          <div className="bg-emerald-50 p-8 md:p-12 rounded-[2.5rem] text-center border border-emerald-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif">Ready to start your glow journey?</h3>
            <p className="text-gray-600 mb-8">Explore our range of premium organic products designed for your skin's health.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/products" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg"
              >
                Shop Now
              </Link>
              <Link 
                href="/blog" 
                className="bg-white text-emerald-700 border-2 border-emerald-600 font-bold py-3 px-8 rounded-full transition-all"
              >
                Back to Blog
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

// This function can be used to generate static paths if you are using SSG.
// For this example, we're relying on dynamic rendering.
export async function generateStaticParams() {
  return blogPosts.map((post: BlogPost) => ({
    id: post.id,
  }));
}