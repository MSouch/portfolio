'use client';
import Link from 'next/link';
import Loader from './Loader'; // Correct import path

export default function Header() {
  return (
    <header className="bg-background border-b border-gray-200 py-4">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left Side - Loader */}
          <div className="flex items-center justify-center">
            <Link href="/">
              {/* Loader Animation */}
              <Loader />
            </Link>
          </div>

          {/* Right Side - Navigation Links */}
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-blue-600 transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}