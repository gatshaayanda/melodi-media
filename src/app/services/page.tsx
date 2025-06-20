import { Metadata } from 'next';
import { Wrench, Laptop2, ShoppingBag, PhoneCall } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services – IYTRONE Electronics',
  description:
    'Explore IYTRONE Electronics’ repair services, tech product sales, and customer support offerings.',
};

export default function ServicesPage() {
  const services = [
    {
      icon: <Wrench size={36} className="text-[#0E3A62]" />,
      title: 'Electronics Repairs',
      desc: 'We diagnose and repair smartphones, laptops, TVs, and more using professional tools and expertise.',
    },
    {
      icon: <ShoppingBag size={36} className="text-[#0E3A62]" />,
      title: 'Tech Product Sales',
      desc: 'We offer quality phones, laptops, and accessories for sale — competitively priced and locally available.',
    },
    {
      icon: <PhoneCall size={36} className="text-[#0E3A62]" />,
      title: 'Support & Quotes',
      desc: 'Need advice, help with a device, or a repair estimate? We’re available by phone or email.',
    },
  ];

  return (
    <section className="py-20 bg-[#F1F1F1] text-[#0B1A33]">
      <div className="container mx-auto max-w-5xl text-center space-y-12">
        <h1 className="text-4xl font-bold">🔧 Our Services</h1>
        <p className="text-[#4F5F7A] max-w-2xl mx-auto">
          Whether your device is broken or you need new gear, we’re here to help with reliable
          solutions and friendly service.
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
