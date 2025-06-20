'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState, FormEvent } from 'react';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { firestore } from '@/utils/firebaseConfig';
import AdminHubLoader from '@/components/AdminHubLoader';

export default function EditBlogPostPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) return;

    (async () => {
      try {
        const snap = await getDoc(doc(firestore, 'blog_posts', id));
        if (!snap.exists()) throw new Error('Blog post not found.');
        const data = snap.data() as any;
        setTitle(data.title || '');
        setContent(data.content || '');
        setTags((data.tags || []).join(', '));
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  const handleUpdate = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await updateDoc(doc(firestore, 'blog_posts', id), {
        title,
        content,
        tags: tags
          .split(',')
          .map((t) => t.trim())
          .filter(Boolean),
      });
      router.push('/admin/blog');
    } catch (e: any) {
      setError(e.message);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;

    try {
      const ref = doc(firestore, 'blog_posts', id);
      const snap = await getDoc(ref);
      const data = snap.data();

      if (!snap.exists() || data?.admin_id !== 'admin') {
        throw new Error('Not allowed to delete this post.');
      }

      await deleteDoc(ref);
      router.push('/admin/blog');
    } catch (e: any) {
      setError(e.message);
    }
  };

  if (loading) return <AdminHubLoader />;
  if (error) return <p className="text-red-500 p-4">{error}</p>;

  return (
    <div className="max-w-xl mx-auto p-8 space-y-6">
      <h1 className="text-2xl font-bold text-[#3F76BF]">📝 Edit Blog Post</h1>

      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title"
          required
          className="w-full border px-3 py-2 rounded"
        />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Post Content"
          required
          className="w-full border px-3 py-2 rounded h-40"
        />

        <input
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Tags (comma-separated)"
          className="w-full border px-3 py-2 rounded"
        />

        <div className="flex items-center gap-2">
          <button type="submit" className="px-4 py-2 bg-[#3F76BF] text-white rounded">
            Update
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Delete
          </button>
          <button
            type="button"
            onClick={() => router.push('/admin/blog')}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
