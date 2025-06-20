'use client';

import { useRouter } from 'next/navigation';
import {
  Wrench,
  PlusCircle,
  ShoppingCart,
  Mail,
  LogOut,
  UserCircle,
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
        <h1 className="flex items-center gap-2 text-3xl font-bold text-[#0E3A62]">
          <UserCircle size={32} /> Admin Panel
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
          href="/admin/repairs"
          className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-[#bce2ff] to-[#62A3E3] text-[#0E3A62] font-semibold hover:opacity-90 transition"
        >
          <Wrench size={20} /> Repair Journal Dashboard
        </a>


        <a
          href="mailto:noreplyadhubmvp@gmail.com"
          className="flex items-center gap-3 p-4 rounded-lg bg-[#5999d4] text-white font-semibold hover:opacity-90 transition"
        >
          <Mail size={20} /> Contact Admin Hub
        </a>


      </div>
    </div>
  );
}
