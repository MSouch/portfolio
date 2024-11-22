'use client';
import Link from 'next/link';
import Loader from './Loader';

export default function Header() {
  return (
    <header className="bg-background border-b border-gray-200 py-4">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center">
            <Link href="/">
              <Loader />
            </Link>
          </div>

          <ul className="flex space-x-8">
            <li>
              <Link 
                href="/" 
                className="bg-neutral-950 text-neutral-400 border border-neutral-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/projects" 
                className="bg-neutral-950 text-neutral-400 border border-neutral-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}