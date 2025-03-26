import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-5xl md:text-7xl font-bold text-[var(--primary)] mb-8">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for doesn't seem to exist. 
          It might have been moved, deleted, or perhaps never existed in the first place.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--primary)] text-white font-medium hover:bg-[var(--primary-light)] transition-colors"
        >
          <FaHome />
          Back to Home
        </Link>
      </div>
    </div>
  );
} 