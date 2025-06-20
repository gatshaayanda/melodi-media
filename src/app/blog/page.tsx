'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  collection,
  getDocs,
  query,
  orderBy
} from 'firebase/firestore';
import { firestore } from '@/utils/firebaseConfig';

interface Blog {
  id: string;
  title: string;
  created_at: { seconds: number; nanoseconds: number };
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const snap = await getDocs(
          query(
            collection(firestore, 'blog_posts'),
            orderBy('created_at', 'desc')
          )
        );
        setPosts(
          snap.docs.map(doc => ({
            id: doc.id,
            ...(doc.data() as Omit<Blog, 'id'>)
          }))
        );
      } catch (err) {
        console.error('Failed to fetch blog posts:', err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <main className="min-h-screen py-20 px-6 bg-[#F1F5F9] text-[#101F33]">
      <section className="max-w-3xl mx-auto text-center space-y-6 mb-12">
        <h1 className="text-4xl font-bold">📝 Melodi Media Blog</h1>
        <p className="text-[#4F5F7A]">
          Creative campaigns, strategic insights, and behind-the-scenes stories from the team.
        </p>
      </section>

      <section className="max-w-3xl mx-auto space-y-6">
        {loading ? (
          <p className="text-center text-[#4F5F7A] italic">Loading posts…</p>
        ) : posts.length === 0 ? (
          <p className="italic text-center text-[#4F5F7A]">No blog posts available yet.</p>
        ) : (
          <ul className="space-y-6">
            {posts.map(post => (
              <li key={post.id} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <Link
                  href={`/blog/${post.id}`}
                  className="text-2xl font-semibold text-[#3F76BF] hover:underline"
                >
                  {post.title}
                </Link>
                <p className="mt-1 text-sm text-[#4F5F7A]">
                  {new Date(post.created_at.seconds * 1000).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
