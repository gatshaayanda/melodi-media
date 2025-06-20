'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  collection,
  getDocs,
  orderBy,
  query,
  Timestamp,
} from 'firebase/firestore';
import { firestore } from '@/utils/firebaseConfig';

interface Repair {
  id: string;
  device: string;
  created_at: Timestamp;
}

export default function RepairsPage() {
  const [repairs, setRepairs] = useState<Repair[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const snap = await getDocs(
        query(collection(firestore, 'repairs'), orderBy('created_at', 'desc'))
      );
      setRepairs(
        snap.docs.map(doc => ({
          id: doc.id,
          ...(doc.data() as Omit<Repair, 'id'>),
        }))
      );
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <p className="text-center py-20">Loading repairs…</p>;
  }

  return (
    <main className="min-h-screen py-20 px-6 bg-[#F1F1F1] text-[#0B1A33]">
      <section className="max-w-3xl mx-auto text-center space-y-6 mb-12">
        <h1 className="text-4xl font-bold">🛠 Repairs Journal</h1>
        <p className="text-[#4F5F7A]">
          Track the latest fixes and diagnostics performed at IYTRONE Electronics.
        </p>
      </section>

      <section className="max-w-3xl mx-auto space-y-6">
        {repairs.length === 0 ? (
          <p className="italic text-center text-[#4F5F7A]">No repairs logged yet.</p>
        ) : (
          <ul className="space-y-6">
            {repairs.map(repair => (
              <li key={repair.id} className="bg-white p-6 rounded shadow">
                <Link
                  href={`/repairs/${repair.id}`}
                  className="text-2xl font-semibold text-blue-600 hover:underline"
                >
                  {repair.device.trim() || 'Untitled Repair'}
                </Link>
                <p className="mt-2 text-sm text-[#4F5F7A]">
                  {repair.created_at?.toDate().toLocaleDateString() ?? 'Unknown date'}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
