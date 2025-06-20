import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import ClientDashboard from './ClientDashboard';

export const metadata = {
  title: 'IYTRONE Admin – Dashboard',
  description: 'Secure area for managing repairs and business records.',
};

export default async function AdminDashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;

  if (!token) {
    redirect('/login');
  }

  return <ClientDashboard />;
}
