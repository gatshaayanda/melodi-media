import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react';

export const metadata = {
  title: 'IYTRONE Admin – Secure Area',
};

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const store = await cookies();
  const token = store.get('admin_token')?.value;

  if (!token) {
    redirect('/login');
  }

  return (
    <main className="min-h-screen bg-[#F1F5F9] text-[#0B1A33]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold mb-6">🛠 Admin Panel – IYTRONE Electronics</h1>
        <div className="bg-white p-6 rounded-xl shadow">{children}</div>
      </div>
    </main>
  );
}
