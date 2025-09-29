'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar, Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);

export default function DashboardPage() {
  // Dummy data
  const barData = {
    labels: ['Event A', 'Event B', 'Event C', 'Event D'],
    datasets: [
      {
        label: 'Attendance',
        data: [65, 59, 80, 81],
        backgroundColor: '#06b6d4', // cyan-500
      },
    ],
  };

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Monthly Revenue ($)',
        data: [500, 1200, 800, 1500, 3200],
        borderColor: '#2563eb', // blue-600
        fill: false,
      },
    ],
  };

  const doughnutData = {
    labels: ['Admin', 'Student', 'Organizer'],
    datasets: [
      {
        label: 'User Roles',
        data: [10, 80, 30],
        backgroundColor: ['#22c55e', '#3b82f6', '#f97316'],
      },
    ],
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-black">📊 Dashboard Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
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

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-2 text-black">Event Attendance (Bar)</h3>
          <Bar data={barData} />
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-2 text-black">Monthly Revenue (Line)</h3>
          <Line data={lineData} />
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-2 text-black">User Roles (Doughnut)</h3>
          <Doughnut data={doughnutData} />
        </div>
      </div>
    </div>
  );
}
