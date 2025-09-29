'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert('Registration successful');
      router.push('/login');
    } else {
      alert('Registration failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row max-w-5xl w-full">

        {/* Left: Register Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Register</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Enter name"
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
              Register
            </button>

            <p className="text-sm text-center mt-4 text-gray-600">
              Already have an account? <a href="/login" className="text-blue-600 hover:underline">Sign in here</a>
            </p>
          </form>
        </div>

        {/* Right: Image + Text */}
        <div className="hidden md:block w-full md:w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1050&q=80"
            alt="Register Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex flex-col items-center justify-center text-white p-8">
            <h2 className="text-3xl font-bold mb-2">Create an account</h2>
            <p className="text-lg text-center">
              Join us and unlock a world of features. <br /> Start your journey with us today.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
