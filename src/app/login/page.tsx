'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    const res = await fetch('/api/login', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: pw }),
    });

    if (res.ok) {
      router.push('/admin/dashboard');
    } else {
      const { error: msg } = await res.json();
      setError(msg || 'Login failed');
      setPw('');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#A7D4F5] to-[#3F76BF] px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md space-y-5 border border-gray-200"
      >
        <h2 className="text-3xl font-extrabold text-center text-[#3F76BF] tracking-tight">
          🔐 Admin Login
        </h2>
        <p className="text-sm text-center text-gray-500 mb-2">
          Melodi Media internal access only.
        </p>
        <input
          type="password"
          placeholder="Enter admin password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#3F76BF] focus:outline-none"
          required
        />
        <button
          type="submit"
          className="w-full bg-[#3F76BF] hover:bg-[#2c5d99] text-white font-semibold py-2 rounded-md transition"
        >
          Log In
        </button>
        {error && <p className="text-red-500 text-center text-sm">{error}</p>}
      </form>
    </div>
  );
}
