'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '@/utils/firebaseConfig';
import AdminHubLoader from '@/components/AdminHubLoader';

export default function AdminViewRepairPage() {
  const path = usePathname().split('/');
  const id = path[path.indexOf('repairs') + 1]; // dynamic segment like repairs/[id]

  const [loading, setLoading] = useState(true);
  const [entry, setEntry] = useState<{ device: string; details: string } | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const snap = await getDoc(doc(firestore, 'repairs', id));
        if (!snap.exists()) {
          setError('Repair entry not found.');
        } else {
          setEntry(snap.data() as any);
        }
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <AdminHubLoader />;
  if (error) return <p className="p-8 text-red-500">{error}</p>;
  if (!entry) return <p className="p-8">Repair entry not found.</p>;

  return (
    <div className="max-w-xl mx-auto p-8 space-y-6">
      <Link href="/admin/repairs" className="text-sm text-gray-500 hover:underline">
        ← Back to Repairs
      </Link>
      <h1 className="text-3xl font-bold text-[#0E3A62]">{entry.device}</h1>
      <div className="whitespace-pre-wrap text-[#333]">{entry.details}</div>
      <Link
        href={`/admin/repairs/${id}/edit`}
        className="text-blue-600 font-medium hover:underline"
      >
        ✎ Edit this entry
      </Link>
    </div>
  );
}
