'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '@/utils/firebaseConfig';
import AdminHubLoader from '@/components/AdminHubLoader';

export default function RepairJournalPage() {
  const [loading, setLoading] = useState(true);
  const [repairs, setRepairs] = useState<{ id: string; device: string }[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const snap = await getDocs(
          query(collection(firestore, 'repairs'), where('admin_id', '==', 'admin'))
        );
        setRepairs(
          snap.docs.map(doc => ({
            id: doc.id,
            device: doc.data().device || 'Unnamed Device',
          }))
        );
      } catch (err) {
        console.error('Failed to load repair records', err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <AdminHubLoader />;

  return (
    <div className="max-w-xl mx-auto p-8 space-y-6">
      <Link href="/admin/dashboard" className="text-sm text-gray-500 hover:underline">
        ← Back to Dashboard
      </Link>

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">📒 Repair Journal</h1>
        <Link
          href="/admin/repairs/new"
          className="inline-block bg-[#64b1f8] text-white px-4 py-2 rounded hover:opacity-90"
        >
          + New Entry
        </Link>
      </div>

      {repairs.length === 0 ? (
        <p className="italic text-gray-500">No repair records yet.</p>
      ) : (
        <ul className="space-y-2">
          {repairs.map(r => (
            <li key={r.id} className="flex justify-between border-b pb-2">
              <span>{r.device}</span>
              <div className="space-x-2">
                <Link
                  href={`/admin/repairs/${r.id}/edit`}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </Link>
                <Link
                  href={`/admin/repairs/${r.id}`}
                  className="text-gray-500 hover:underline"
                >
                  View
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
