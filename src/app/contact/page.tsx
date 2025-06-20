import { Metadata } from 'next';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact – Melodi Media',
  description:
    'Get in touch with Melodi Media for campaign inquiries, creative collaborations, or business consultations.',
};

export default function ContactPage() {
  return (
    <section className="py-20 bg-white text-[#101F33]">
      <div className="container mx-auto max-w-4xl space-y-12 text-center">
        <h1 className="text-4xl font-bold">📬 Contact Us</h1>
        <p className="text-[#4F5F7A] max-w-2xl mx-auto">
          Whether you're looking to launch your next big campaign, produce creative content,
          or explore a media partnership — we're here and ready to connect.
        </p>

        <div className="grid gap-10 md:grid-cols-3 text-left text-sm md:text-base">
          <div className="flex flex-col items-center space-y-2">
            <Mail className="text-[#3F76BF]" size={28} />
            <p className="font-semibold">Email</p>
            <a
              href="mailto:tumorathedi@gmail.com"
              className="text-[#3F76BF] hover:underline"
            >
              tumorathedi@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <Phone className="text-[#3F76BF]" size={28} />
            <p className="font-semibold">Phone</p>
            <p>+267 75 111 025</p>
            <p>+267 76 097 237</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <MapPin className="text-[#3F76BF]" size={28} />
            <p className="font-semibold">Location</p>
            <p>Plot 32204, Phakalane</p>
            <p>Gaborone, Botswana</p>
          </div>
        </div>

        <div className="pt-16">
          <h2 className="text-2xl font-semibold mb-4">📩 Quick Inquiry</h2>
          <form className="grid gap-6 max-w-xl mx-auto text-left">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg px-4 py-3"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg px-4 py-3"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="border border-gray-300 rounded-lg px-4 py-3"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-br from-[#A7D4F5] to-[#3F76BF] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
