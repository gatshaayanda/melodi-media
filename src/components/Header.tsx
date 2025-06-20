'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Repairs Journal', path: '/repairs' }, // formerly blog
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="w-full bg-white/90 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="container flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-extrabold text-[#0E3A62] tracking-tight">
          IYTRONE
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
              className="text-[#0E3A62] font-medium hover:text-[#62A3E3] transition"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
