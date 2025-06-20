'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Blog', path: '/blog' }, // optional blog path
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="w-full bg-white/90 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="container flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-extrabold text-[#3F76BF] tracking-tight">
          Melodi Media
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Nav links */}
        <nav
          className={`${
            isOpen ? 'flex' : 'hidden'
          } flex-col space-y-4 md:flex md:flex-row md:space-y-0 md:space-x-6`}
        >
          {pages.map(({ label, path }) => (
            <Link
              key={label}
              href={path}
              className="text-[#101F33] font-medium hover:text-[#3F76BF] transition"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
