'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { firestore } from '@/utils/firebaseConfig';

export default function CreateBlogPostPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await addDoc(collection(firestore, 'blog_posts'), {
        admin_id: 'admin',
        title,
        content,
        tags: tags.split(',').map(t => t.trim()).filter(Boolean),
        created_at: serverTimestamp(),
      });
      router.push('/admin/blog');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 space-y-6">
      <h1 className="text-2xl font-bold text-[#3F76BF]">✍️ New Blog Post</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Post Title"
          required
          className="w-full border border-gray-300 px-4 py-2 rounded"
        />

        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Post Content (markdown or plain text)"
          required
          className="w-full border border-gray-300 px-4 py-2 rounded h-40"
        />

        <input
          value={tags}
          onChange={e => setTags(e.target.value)}
          placeholder="Tags (comma-separated)"
          className="w-full border border-gray-300 px-4 py-2 rounded"
        />

        <div className="flex gap-3">
          <button
            type="submit"
            className="px-4 py-2 bg-[#3F76BF] text-white rounded hover:opacity-90 transition"
          >
            Save Post
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
