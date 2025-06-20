'use client';

import { useRouter } from 'next/navigation';
import {
  FileText,
  PlusCircle,
  Mail,
  LogOut,
  UserCircle,
  LayoutDashboard,
} from 'lucide-react';

export default function ClientDashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/logout', {
      method: 'POST',
      credentials: 'include',
    });
    router.replace('/login');
  };

  return (
    <div className="px-6 py-8 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="flex items-center gap-2 text-3xl font-bold text-[#3F76BF]">
          <UserCircle size={32} /> Melodi Admin Panel
        </h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          <LogOut size={16} /> Logout
        </button>
      </div>

      {/* Quick Actions */}
      <div className="grid sm:grid-cols-2 gap-4 bg-white p-6 rounded-xl shadow">
        <a
          href="/admin/blog/"
          className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-[#A7D4F5] to-[#76acf3] text-[#101F33] font-semibold hover:opacity-90 transition"
        >
          <FileText size={20} /> Blog Manager
        </a>

        <a
          href="mailto:noreplyadhubmvp@gmail.com"
          className="flex items-center gap-3 p-4 rounded-lg bg-[#b5cff0] text-white font-semibold hover:opacity-90 transition"
        >
          <Mail size={20} /> Contact Admin Hub
        </a>
      </div>
    </div>
  );
}
