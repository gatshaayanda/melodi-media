'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { doc, getDoc, Timestamp } from 'firebase/firestore';
import { firestore } from '@/utils/firebaseConfig';

interface Repair {
  device: string;
  details: string;
  created_at: Timestamp;
}

export default function RepairDetailPage() {
  const router = useRouter();
  const { id } = useParams() as { id: string };

  const [repair, setRepair] = useState<Repair | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      router.replace('/repairs');
      return;
    }

    (async () => {
      try {
        const snap = await getDoc(doc(firestore, 'repairs', id));
        if (!snap.exists()) {
          router.replace('/repairs');
          return;
        }
        setRepair(snap.data() as Repair);
      } catch {
        router.replace('/repairs');
      } finally {
        setLoading(false);
      }
    })();
  }, [id, router]);

  if (loading) return <p className="text-center py-20">Loading entry…</p>;
  if (!repair) return <p className="text-center py-20">Repair not found.</p>;

  return (
    <main className="min-h-screen py-20 px-6 bg-[#F1F1F1] text-[#0B1A33]">
      <div className="max-w-3xl mx-auto space-y-6">
        <button
          className="text-sm text-blue-600 hover:underline"
          onClick={() => router.push('/repairs')}
        >
          ← Back to Repairs Journal
        </button>
        <h1 className="text-4xl font-bold">{repair.device}</h1>
        <p className="text-gray-500 text-sm">
          {repair.created_at?.toDate().toLocaleDateString() ?? 'Unknown date'}
        </p>
        <div className="prose max-w-none whitespace-pre-wrap">
          {repair.details || 'No additional notes.'}
        </div>
      </div>
    </main>
  );
}
