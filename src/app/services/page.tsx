import { Metadata } from 'next';
import {
  Megaphone,
  Video,
  Users,
  Paintbrush,
  FileText,
  Calendar,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services – Melodi Media',
  description:
    'Explore Melodi Media’s full-service offerings in marketing, PR, content creation, and brand strategy.',
};

export default function ServicesPage() {
  const services = [
    {
      icon: <Megaphone size={36} className="text-[#3F76BF]" />,
      title: 'Digital Marketing',
      desc: 'Engaging social campaigns, paid ads, and content strategy to grow your brand online.',
    },
    {
      icon: <Video size={36} className="text-[#3F76BF]" />,
      title: 'Content Creation',
      desc: 'We produce professional video, audio, and photo content that brings your message to life.',
    },
    {
      icon: <Users size={36} className="text-[#3F76BF]" />,
      title: 'Influencer Marketing',
      desc: 'Leverage trusted voices through curated influencer campaigns aligned with your goals.',
    },
    {
      icon: <Paintbrush size={36} className="text-[#3F76BF]" />,
      title: 'Graphic Design',
      desc: 'Bold, beautiful visuals—posters, social media, branding kits and more.',
    },
    {
      icon: <FileText size={36} className="text-[#3F76BF]" />,
      title: 'PR & Communication',
      desc: 'Media coverage, press releases, and clear brand messaging tailored to your market.',
    },
    {
      icon: <Calendar size={36} className="text-[#3F76BF]" />,
      title: 'Event Activations',
      desc: 'Strategic event planning and rollouts that turn moments into movements.',
    },
  ];

  return (
    <section className="py-20 bg-[#F1F5F9] text-[#101F33]">
      <div className="container mx-auto max-w-6xl text-center space-y-12">
        <h1 className="text-4xl font-bold">🎯 What We Offer</h1>
        <p className="text-[#4F5F7A] max-w-2xl mx-auto">
          Melodi Media offers creative and data-driven services designed to grow your brand, connect
          with audiences, and make an impact online and offline.
        </p>
        <div className="grid gap-10 md:grid-cols-3">
          {services.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-[#4F5F7A]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
