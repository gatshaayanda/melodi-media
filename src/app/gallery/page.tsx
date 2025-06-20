import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery – IYTRONE Electronics',
  description:
    'Browse real examples of our repair work, tools in action, and the products we sell.',
};

export default function GalleryPage() {
  return (
    <section className="py-20 bg-white text-[#0B1A33]">
      <div className="container mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-bold text-center mb-10">📸 Our Gallery</h1>
        <p className="text-center text-[#4F5F7A] max-w-2xl mx-auto mb-12">
          Take a look at some of our repair jobs, customer equipment, and the real tools we use to
          get the job done right.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-[#e6f0f8] rounded-lg shadow-inner flex items-center justify-center text-[#0E3A62] font-semibold text-sm"
            >
              Upload Image {i + 1}
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-center text-gray-500">
          Want your repair featured here? Just ask us to take a photo after service!
        </p>
      </div>
    </section>
  );
}
