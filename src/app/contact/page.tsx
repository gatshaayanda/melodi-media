import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us – IYTRONE Electronics',
  description: 'Contact George at IYTRONE Electronics. Reach out via email or WhatsApp to ask about repairs, quotes, or tech sales.',
};

export default function ContactPage() {
  return (
    <section className="py-20 bg-white text-[#0B1A33]">
      <div className="container mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold">📞 Contact Us</h1>
        <p className="text-[#4F5F7A] max-w-xl mx-auto">
          Got a device that needs fixing? Need a quote or want to check product availability?
          George is ready to help.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Link
            href="mailto:mapurazigeorge@gmail.com"
            className="bg-[#0E3A62] text-white rounded-full px-6 py-3 font-semibold hover:opacity-90"
          >
            📧 mapurazigeorge@gmail.com
          </Link>
          <Link
            href="https://wa.me/26773065682"
            className="bg-green-600 text-white rounded-full px-6 py-3 font-semibold hover:bg-green-700"
          >
            📲 WhatsApp George
          </Link>
        </div>
      </div>
    </section>
  );
}
