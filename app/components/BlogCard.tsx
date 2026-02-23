// app/components/BlogCard.tsx
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  id: string;
  title: string;
  preview: string;
  imageUrl: string;
}

export default function BlogCard({ id, title, preview, imageUrl }: BlogCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl">
      <Link href={`/blog/${id}`} className="block">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-6">
        <Link href={`/blog/${id}`}>
          <h3 className="text-2xl font-bold text-gray-800 mb-3 font-serif hover:text-pink-500 transition-colors duration-300">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 text-base mb-6">{preview}</p>
        <Link href={`/blog/${id}`} className="text-pink-500 font-semibold group-hover:underline transition-all duration-300">
          Read More &rarr;
        </Link>
      </div>
    </div>
  );
}
