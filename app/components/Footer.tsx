// app/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 p-8 text-center text-gray-700 mt-10">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-6 mb-4">
          {/* Placeholder Social Links */}
          <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
            Facebook
          </a>
          <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
            Instagram
          </a>
          <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
            Twitter
          </a>
        </div>
        <p className="mb-2">
          Built by{" "}
          <a
            href="https://www.linkedin.com/in/yasmeen-nisar-043a493a3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Yasmin Nisar
          </a>
        </p>
        <p className="mb-4">
          <a
            href="https://www.facebook.com/share/v/1N6hFs4moS/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Find me on Facebook
          </a>
        </p>
        <p>&copy; {new Date().getFullYear()} Glowvera Skincare. All rights reserved.</p>
      </div>
    </footer>
  );
}
