import Link from 'next/link';

export const metadata = {
  title: 'Admin Panel',
};

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white fixed h-screen">
        <div className="p-6 font-bold text-2xl border-b border-blue-800">Admin Panel</div>
        <nav className="flex flex-col p-4 space-y-2">
          <Link href="/admin" className="hover:bg-blue-800 p-2 rounded">Dashboard</Link>
          <Link href="/admin/users" className="hover:bg-blue-800 p-2 rounded">Users</Link>
          <Link href="/admin/events" className="hover:bg-blue-800 p-2 rounded">Events</Link>
          <Link href="/admin/settings" className="hover:bg-blue-800 p-2 rounded">Settings</Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="ml-64 p-6 w-full">
        {children}
      </main>
    </div>
  );
}
