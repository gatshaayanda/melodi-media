import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio – Melodi Media',
  description:
    'Explore campaigns and creative work delivered by Melodi Media, from brand activations to social storytelling.',
};

export default function PortfolioPage() {
  const projects = [
    {
      title: 'Avani Winter Soiree Campaign',
      desc: 'Full digital rollout including influencer strategy, content creation, and sponsor integration.',
      link: '#',
    },
    {
      title: 'Brand Identity for XYZ Events',
      desc: 'From logo to launch — a full creative suite including graphics, social content, and video promo.',
      link: '#',
    },
    {
      title: 'Hospitality Launch Media Kit',
      desc: 'Produced press releases, visuals, and influencer outreach for a major hotel reopening.',
      link: '#',
    },
    {
      title: 'Social Awareness PSA Series',
      desc: 'Video series addressing youth empowerment, mental health, and social change themes.',
      link: '#',
    },
    {
      title: 'Retail Brand Influencer Collab',
      desc: 'Micro-influencer activation with live campaign tracking and measurable engagement.',
      link: '#',
    },
    {
      title: 'Event Design & PR Rollout',
      desc: 'From press coverage to media day coordination — we handled full brand visibility.',
      link: '#',
    },
  ];

  return (
    <section className="py-20 bg-white text-[#101F33]">
      <div className="container mx-auto max-w-6xl space-y-8 text-center">
        <h1 className="text-4xl font-bold">🎬 Our Portfolio</h1>
        <p className="text-[#4F5F7A] max-w-xl mx-auto">
          These are just a few examples of how we help brands stand out through strategy, storytelling,
          and design. More coming soon.
        </p>

        <div className="grid gap-10 md:grid-cols-2 text-left">
          {projects.map(({ title, desc, link }) => (
            <div
              key={title}
              className="p-6 bg-[#F9FAFB] rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p className="text-sm text-[#4F5F7A] mb-4">{desc}</p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3F76BF] font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
