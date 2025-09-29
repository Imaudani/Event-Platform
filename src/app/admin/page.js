export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl text-black font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl text-black font-semibold">Total Users</h2>
          <p className="text-3xl text-cyan-700 mt-2">120</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl text-black font-semibold">Events</h2>
          <p className="text-3xl text-cyan-700 mt-2">15</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl text-black font-semibold">Revenue</h2>
          <p className="text-3xl text-cyan-700 mt-2">$3,200</p>
        </div>
      </div>
    </div>
  );
}
