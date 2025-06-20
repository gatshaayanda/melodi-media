// src/app/admin/dashboard/ClientDashboard.tsx
'use client'

import { useRouter } from 'next/navigation'
import {
  UserCircle,
  PlusCircle,
  Newspaper,
  Mail,
  BarChart2,
  LogOut,
} from 'lucide-react'

export default function ClientDashboard() {
  const router = useRouter()

  const handleLogout = async () => {
    await fetch('/api/logout', {
      method:      'POST',
      credentials: 'include',
    })
    router.replace('/login')
  }

  return (
    <div className="px-6 py-8 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="flex items-center gap-2 text-3xl font-bold">
          <UserCircle size={32} /> Dashboard
        </h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded"
        >
          <LogOut size={16} /> Logout
        </button>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-3 bg-white p-4 rounded shadow">

        <a href="/admin/blog" className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded">
          <Newspaper size={16} /> Open Blog Portal
        </a>
      </div>



   
    </div>
  )
}
