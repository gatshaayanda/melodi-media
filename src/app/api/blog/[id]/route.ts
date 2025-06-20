import { NextResponse } from 'next/server';
import { doc, deleteDoc, getDoc } from 'firebase/firestore';
import { firestore } from '@/utils/firebaseConfig';

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const ref = doc(firestore, 'blog_posts', params.id);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    const data = snap.data();
    if (data.admin_id !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    await deleteDoc(ref);
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
