export default function UsersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="p-3">Navod Nawarathna</td>
            <td className="p-3">navod@example.com</td>
            <td className="p-3">Admin</td>
          </tr>
          <tr className="border-t">
            <td className="p-3">Imasha Perera</td>
            <td className="p-3">imasha@example.com</td>
            <td className="p-3">User</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
