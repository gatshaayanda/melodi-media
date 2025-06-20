import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us – Melodi Media',
  description:
    'Discover Melodi Media — a 360° marketing, PR, and content production agency based in Gaborone. We help brands connect and grow through strategy and creativity.',
};

export default function AboutPage() {
  return (
    <>
      {/* Who We Are */}
      <section className="py-20 bg-white text-[#101F33]">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-4xl font-bold">🌐 Who We Are</h1>
          <p className="text-lg text-[#4F5F7A] max-w-3xl mx-auto">
            Melodi Media is a Gaborone-based digital marketing and PR agency offering 360° brand
            solutions. We exist to help businesses connect meaningfully with their audiences through
            strategic communication, immersive content, and unforgettable campaigns.
          </p>
          <p className="text-[#4F5F7A] max-w-2xl mx-auto">
            We don’t just follow trends — we help shape them. Whether you're launching a product,
            building a community, or refreshing your identity, we bring the creative and technical firepower
            to make it resonate.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-[#F1F5F9] text-[#101F33]">
        <div className="container mx-auto space-y-12">
          <div>
            <h2 className="text-2xl font-semibold mb-2">🎥 What We Offer</h2>
            <p className="text-[#4F5F7A]">
              Our services blend digital and traditional media to deliver results-driven storytelling:
            </p>
            <ul className="list-disc list-inside text-[#4F5F7A] mt-2 space-y-1">
              <li>Social media strategy, campaigns, and influencer marketing</li>
              <li>Professional content creation — video, audio, graphic design</li>
              <li>PR, media relations, and brand activations</li>
              <li>Event marketing and production support</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">📍 Our Clients</h2>
            <p className="text-[#4F5F7A]">
              We’ve worked with brands across industries — from hospitality to events — delivering
              measurable growth and standout creative. One of our notable campaigns includes the{" "}
              <strong>Avani Winter Soiree</strong>, where we drove digital buzz, influencer
              engagement, and strategic visibility.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🌱 Our Vision</h2>
            <p className="text-[#4F5F7A]">
              We envision a creative ecosystem in Botswana and beyond where stories are amplified,
              messages are elevated, and brands feel human again.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🤝 Why Choose Us</h2>
            <p className="text-[#4F5F7A]">
              You’re not just hiring an agency — you’re gaining a partner. We bring insight,
              dedication, and unmatched creativity to every client relationship.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
