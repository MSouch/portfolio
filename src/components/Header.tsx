import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-background border-b border-gray-200 py-4">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              MS
            </Link>
          </div>
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
              <Link href="#contact" className="hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}