'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '@/utils/firebaseConfig';
import AdminHubLoader from '@/components/AdminHubLoader';

export default function BlogManagerPage() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<{ id: string; title: string }[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const snap = await getDocs(
          query(collection(firestore, 'blog_posts'), where('admin_id', '==', 'admin'))
        );
        setPosts(
          snap.docs.map(doc => ({
            id: doc.id,
            title: doc.data().title || 'Untitled Post',
          }))
        );
      } catch (err) {
        console.error('Failed to load blog posts', err);
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
        <h1 className="text-2xl font-bold">📝 Blog Manager</h1>
        <Link
          href="/admin/blog/create"
          className="inline-block bg-[#e2eeff] text-white px-4 py-2 rounded hover:opacity-90"
        >
          + New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <p className="italic text-gray-500">No blog posts yet.</p>
      ) : (
        <ul className="space-y-2">
          {posts.map(post => (
            <li key={post.id} className="flex justify-between border-b pb-2">
              <span>{post.title}</span>
              <div className="space-x-2">
                <Link
                     href={`/admin/blog/${post.id}/edit`}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </Link>
                <Link
                  href={`/admin/blog/${post.id}`}
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
