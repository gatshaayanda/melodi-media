'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState, FormEvent } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { firestore } from '@/utils/firebaseConfig';
import AdminHubLoader from '@/components/AdminHubLoader';

export default function EditRepairPage() {
  const router = useRouter();
  const params = useParams() as { id?: string };
  const id = params.id!;

  const [loading, setLoading] = useState(true);
  const [device, setDevice] = useState('');
  const [details, setDetails] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) {
      router.replace('/admin/repairs');
      return;
    }

    (async () => {
      try {
        const snap = await getDoc(doc(firestore, 'repairs', id));
        if (!snap.exists()) throw new Error('Repair entry not found.');
        const data = snap.data() as any;
        setDevice(data.device);
        setDetails(data.details);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [id, router]);

  if (loading) return <AdminHubLoader />;

  const handleUpdate = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await updateDoc(doc(firestore, 'repairs', id), { device, details });
      router.push('/admin/repairs');
    } catch (e: any) {
      setError(e.message);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this repair entry?')) return;
    try {
      const res = await fetch(`/api/repairs/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      if (!res.ok) {
        const { error: msg } = await res.json();
        throw new Error(msg || 'Delete failed');
      }
      router.push('/admin/repairs');
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 space-y-6">
      <h1 className="text-2xl font-bold">Edit Repair Entry</h1>
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          value={device}
          onChange={(e) => setDevice(e.target.value)}
          placeholder="Device Name or Issue"
          required
          className="w-full border px-3 py-2 rounded"
        />

        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Repair Details"
          required
          className="w-full border px-3 py-2 rounded h-40"
        />

        <div className="flex items-center gap-2">
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
            Update
          </button>
          <button type="button" onClick={handleDelete} className="px-4 py-2 bg-red-600 text-white rounded">
            Delete
          </button>
          <button type="button" onClick={() => router.push('/admin/repairs')} className="px-4 py-2 bg-gray-200 rounded">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
