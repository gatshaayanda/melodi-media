'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '@/utils/firebaseConfig';

interface Blog {
  title: string;
  content: string;
  created_at: { seconds: number; nanoseconds: number };
}

export default function BlogPostPage() {
  const router = useRouter();
  const path = usePathname(); // e.g. "/blog/abc123"
  const id = path.split('/').pop()!;

  const [post, setPost] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const snap = await getDoc(doc(firestore, 'blog_posts', id));
        if (!snap.exists()) {
          router.replace('/blog');
          return;
        }
        setPost(snap.data() as Blog);
      } catch {
        router.replace('/blog');
      } finally {
        setLoading(false);
      }
    })();
  }, [id, router]);

  if (loading) {
    return <p className="text-center py-20 text-[#4F5F7A]">Loading post…</p>;
  }

  if (!post) {
    return <p className="text-center py-20 text-[#4F5F7A]">Post not found.</p>;
  }

  return (
    <main className="min-h-screen py-20 px-6 bg-[#F1F5F9] text-[#101F33]">
      <div className="max-w-3xl mx-auto space-y-6">
        <button
          className="text-sm text-[#3F76BF] hover:underline"
          onClick={() => router.push('/blog')}
        >
          ← Back to Blog
        </button>
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="text-sm text-gray-500">
          {new Date(post.created_at.seconds * 1000).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </p>
        <article className="prose prose-blue max-w-none whitespace-pre-wrap text-[#4F5F7A]">
          {post.content}
        </article>
      </div>
    </main>
  );
}
