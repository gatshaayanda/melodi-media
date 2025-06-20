import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import ClientDashboard from './ClientDashboard';

export const metadata = {
  title: 'Melodi Media Admin – Dashboard',
  description: 'Manage blog posts, campaigns, and creative content securely.',
};

export default async function AdminDashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;

  if (!token) {
    redirect('/login');
  }

  return <ClientDashboard />;
}
