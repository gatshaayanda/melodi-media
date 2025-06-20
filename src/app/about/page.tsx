import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us – IYTRONE Electronics',
  description:
    'Learn about IYTRONE Electronics (Pty) Ltd — our skills, mission, equipment needs, and how we support tech users in Botswana.',
};

export default function AboutPage() {
  return (
    <>
      {/* Who We Are */}
      <section className="py-20 bg-white text-[#0B1A33]">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-4xl font-bold">📍 Who We Are</h1>
          <p className="text-lg text-[#4F5F7A]">
            IYTRONE Electronics (Pty) Ltd is a Botswana-based repair and tech support company founded
            by George Mapurazi. We specialize in professional electronics repairs and trusted product sales.
          </p>
          <p className="text-[#4F5F7A]">
            Our mission is to help customers stay connected by restoring and maintaining the devices
            they rely on — phones, laptops, accessories, and more.
          </p>
        </div>
      </section>

      {/* Skills & Equipment */}
      <section className="py-20 bg-[#F1F1F1] text-[#0B1A33]">
        <div className="container mx-auto space-y-12">
          <div>
            <h2 className="text-2xl font-semibold mb-2">🛠 Our Expertise</h2>
            <p className="text-[#4F5F7A]">
              With hands-on skills across a range of hardware, we troubleshoot and fix even complex
              issues. From screen replacements to micro soldering, every repair is handled with care.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🔧 Tools We Need</h2>
            <p className="text-[#4F5F7A]">
              Our work would be even more efficient with access to critical tools like:
            </p>
            <ul className="list-disc list-inside text-[#4F5F7A] mt-2 space-y-1">
              <li>Digital microscopes</li>
              <li>Rotary tools & breadboards</li>
              <li>Oscilloscopes</li>
              <li>Reballing machines</li>
            </ul>
            <p className="text-[#4F5F7A] mt-2">
              Investing in these will help us deliver even higher quality results.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🎯 Our Goals</h2>
            <p className="text-[#4F5F7A]">
              We aim to grow our client base, build trust in our brand, and attract new opportunities
              — including potential support from business development funds or equipment sponsorships.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🤝 Our Promise</h2>
            <p className="text-[#4F5F7A]">
              Whether you're here to fix a device or buy tech gear, you'll get personalized service,
              real expertise, and a commitment to quality that sets us apart.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
