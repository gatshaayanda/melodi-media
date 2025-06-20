'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { firestore } from '@/utils/firebaseConfig';

export default function NewRepairPage() {
  const router = useRouter();
  const [device, setDevice] = useState('');
  const [details, setDetails] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await addDoc(collection(firestore, 'repairs'), {
        admin_id: 'admin',
        device,
        details,
        created_at: serverTimestamp(),
      });
      router.push('/admin/repairs');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 space-y-6">
      <h1 className="text-2xl font-bold text-[#0E3A62]">🛠 New Repair Entry</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          value={device}
          onChange={e => setDevice(e.target.value)}
          placeholder="Device Name / Type"
          required
          className="w-full border border-gray-300 px-4 py-2 rounded"
        />

        <textarea
          value={details}
          onChange={e => setDetails(e.target.value)}
          placeholder="Repair Details / Notes"
          required
          className="w-full border border-gray-300 px-4 py-2 rounded h-40"
        />

        <div className="flex gap-3">
          <button
            type="submit"
            className="px-4 py-2 bg-[#0E3A62] text-white rounded hover:opacity-90 transition"
          >
            Save Entry
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded"
          >
            Cancel
          </button>
        </div>

        {error && <p className="text-red-600">{error}</p>}
      </form>
    </div>
  );
}
