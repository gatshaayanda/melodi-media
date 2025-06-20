'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Wrench,
  Phone,
  Laptop2,
  Monitor,
  Camera,
  ShieldCheck,
  Timer,
  BadgeCheck,
} from 'lucide-react';

export default function HomePage() {
  const router = useRouter();
  const keys = useRef<string[]>([]);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [greeting, setGreeting] = useState('');
  const [emoji, setEmoji] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    setGreeting(hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening');
    setEmoji(hour < 12 ? '🌞' : hour < 18 ? '☀️' : '🌙');

    const onKey = (e: KeyboardEvent) => {
      keys.current.push(e.key.toLowerCase());
      if (keys.current.length > 5) keys.current.shift();
      if (keys.current.join('') === 'admin') {
        router.push('/login');
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [router]);

  const longPress = {
    onTouchStart: () => setTouchStart(Date.now()),
    onTouchEnd: () => {
      if (touchStart && Date.now() - touchStart > 600) router.push('/login');
      setTouchStart(null);
    },
  };

  return (
    <>
      {/* Hero */}
      <section
        {...longPress}
        className="bg-gradient-to-br from-[#0E3A62] to-[#62A3E3] text-white text-center py-24 px-6"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-md">
          {greeting} {emoji}, we repair & power your tech.
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          IYTRONE Electronics (Pty) Ltd helps you stay connected — we fix laptops, phones,
          accessories and more using professional tools and passion.
        </p>
        <Link
          href="#contact"
          className="inline-block bg-white text-[#0E3A62] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition"
        >
          📞 Book a Repair
        </Link>
      </section>

      {/* Devices we service */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-2xl font-bold mb-10">🛠️ What We Fix</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 max-w-5xl mx-auto">
          {[
            { icon: <Phone size={32} />, label: 'Phones' },
            { icon: <Laptop2 size={32} />, label: 'Laptops' },
            { icon: <Monitor size={32} />, label: 'Monitors/TVs' },
            { icon: <Camera size={32} />, label: 'Accessories' },
          ].map(({ icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-[#0E3A62]">
              <div className="bg-[#bce2ff] p-4 rounded-full">{icon}</div>
              <p className="font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#F9FAFB] text-center">
        <h2 className="text-2xl font-bold mb-10">💡 Why Choose IYTRONE?</h2>
        <div className="grid gap-8 px-6 max-w-4xl mx-auto md:grid-cols-3">
          {[
            {
              icon: <ShieldCheck size={32} />,
              title: 'Expert Tools',
              desc: 'We use microscopes, reballing stations, and diagnostic gear for quality results.',
            },
            {
              icon: <Timer size={32} />,
              title: 'Fast Turnaround',
              desc: 'We know time matters. Expect prompt, reliable service without delays.',
            },
            {
              icon: <BadgeCheck size={32} />,
              title: 'Real Experience',
              desc: 'Decades of hands-on knowledge with real customer tech issues.',
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="p-6 bg-white shadow rounded-xl text-left">
              <div className="text-[#0E3A62] mb-3">{icon}</div>
              <h3 className="font-bold text-lg mb-1">{title}</h3>
              <p className="text-sm text-[#4F5F7A]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery placeholder */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-2xl font-bold mb-6">📸 Workshop Gallery</h2>
        <p className="text-[#4F5F7A] mb-8 max-w-xl mx-auto">
          See some of our real work — repairs in action, tools on the bench, and happy devices!
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-6 max-w-5xl mx-auto">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-[#e6f0f8] rounded-lg shadow-inner flex items-center justify-center text-[#0E3A62] font-semibold"
            >
              Image {i + 1}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 bg-[#0E3A62] text-white text-center">
        <h2 className="text-2xl font-bold mb-4">📬 Let’s Work on Your Tech</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Email George directly or stop by to talk repairs, tools, or electronics solutions.
        </p>
        <Link
          href="mailto:mapurazigeorge@gmail.com"
          className="bg-white text-[#0E3A62] px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition"
        >
          📧 mapurazigeorge@gmail.com
        </Link>
      </section>
    </>
  );
}
