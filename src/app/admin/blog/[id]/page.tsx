'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '@/utils/firebaseConfig';
import AdminHubLoader from '@/components/AdminHubLoader';

export default function AdminBlogPostPage() {
  const { id } = useParams() as { id: string };

  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState<{ title: string; content: string } | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) return;

    (async () => {
      try {
        const snap = await getDoc(doc(firestore, 'blog_posts', id));
        if (!snap.exists()) {
          setError('Blog post not found.');
        } else {
          setPost(snap.data() as any);
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
  if (!post) return <p className="p-8">Blog post not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-8 space-y-6">
      <Link href="/admin/blog" className="text-sm text-gray-500 hover:underline">
        ← Back to Blog Manager
      </Link>
      <h1 className="text-3xl font-bold text-[#3F76BF]">{post.title}</h1>
      <article className="whitespace-pre-wrap text-[#4F5F7A] leading-relaxed">
        {post.content}
      </article>
    </div>
  );
}
