'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Megaphone,
  Video,
  Image as ImageIcon,
  Users,
  Lightbulb,
  Calendar,
  PenTool,
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
        className="bg-gradient-to-br from-[#A7D4F5] to-[#3F76BF] text-white text-center py-24 px-6"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-md">
          {greeting} {emoji}, welcome to Melodi Media.
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          A 360° PR, content production, and digital marketing agency dedicated to transforming
          brands through creative strategy and powerful storytelling.
        </p>
        <Link
          href="#contact"
          className="inline-block bg-white text-[#3F76BF] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition"
        >
          📩 Let’s Talk Strategy
        </Link>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-2xl font-bold mb-10">🎯 What We Do</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 max-w-5xl mx-auto">
          {[
            { icon: <Megaphone size={28} />, label: 'PR & Marketing' },
            { icon: <Video size={28} />, label: 'Content Creation' },
            { icon: <Users size={28} />, label: 'Influencer Collabs' },
            { icon: <Calendar size={28} />, label: 'Event Activations' },
          ].map(({ icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-[#3F76BF]">
              <div className="bg-[#E3F1FA] p-4 rounded-full">{icon}</div>
              <p className="font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Melodi */}
      <section className="py-20 bg-[#F9FAFB] text-center">
        <h2 className="text-2xl font-bold mb-10">💡 Why Melodi Media?</h2>
        <div className="grid gap-8 px-6 max-w-4xl mx-auto md:grid-cols-3">
          {[
            {
              icon: <Lightbulb size={28} />,
              title: 'Creative Strategy',
              desc: 'We craft campaigns that emotionally connect with your audience and leave impact.',
            },
            {
              icon: <PenTool size={28} />,
              title: 'Design-Led Thinking',
              desc: 'Every visual is intentional. We blend aesthetics with functionality for modern results.',
            },
            {
              icon: <ImageIcon size={28} />,
              title: 'Portfolio Proven',
              desc: 'With events like the Avani Winter Soiree, we’ve helped brands shine louder.',
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="p-6 bg-white shadow rounded-xl text-left">
              <div className="text-[#3F76BF] mb-3">{icon}</div>
              <h3 className="font-bold text-lg mb-1">{title}</h3>
              <p className="text-sm text-[#4F5F7A]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Placeholder */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-2xl font-bold mb-6">🌟 Featured Work</h2>
        <p className="text-[#4F5F7A] mb-8 max-w-xl mx-auto">
          Check out our campaign rollouts, behind-the-scenes content, and creative outputs for clients.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-6 max-w-5xl mx-auto">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-[#e6f0f8] rounded-lg shadow-inner flex items-center justify-center text-[#3F76BF] font-semibold"
            >
              Portfolio {i + 1}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 bg-[#3F76BF] text-white text-center">
        <h2 className="text-2xl font-bold mb-4">📞 Ready to Build Your Brand?</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Reach out to us for strategic consultations, media partnerships, and creative campaigns.
        </p>
        <Link
          href="mailto:tumorathedi@gmail.com"
          className="bg-white text-[#3F76BF] px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition"
        >
          📧 tumorathedi@gmail.com
        </Link>
      </section>
    </>
  );
}
