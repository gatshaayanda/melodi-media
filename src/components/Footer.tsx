export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#A7D4F5] to-[#3F76BF] text-white mt-12 shadow-inner">
      <div className="container px-4 py-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Melodi Media. All rights reserved.</p>
        <p className="opacity-80">Creative PR, content production, and marketing agency in Botswana.</p>
      </div>
    </footer>
  );
}
