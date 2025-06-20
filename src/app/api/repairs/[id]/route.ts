// src/app/api/repairs/[id]/route.ts
import { NextResponse } from 'next/server'
import { doc, deleteDoc } from 'firebase/firestore'
import { firestore } from '@/utils/firebaseConfig'

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const repairRef = doc(firestore, 'repairs', params.id)
    await deleteDoc(repairRef)
    return NextResponse.json({ success: true })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
