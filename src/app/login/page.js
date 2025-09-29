'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      redirect: false,
      email: form.email,
      password: form.password,
    });

    if (!res?.error) {
      router.push('/admin');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row max-w-5xl w-full">
        
        {/* Left: Login Form */}
        <div className="w-full md:w-1/2 p-8">
          {/* <div className="mb-6">
            <img src="https://www.readymadeui.com/logo.svg" alt="Logo" className="h-8" />
          </div> */}
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign in</h2>

          <form onSubmit={handleLogin} className="space-y-4">
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

            <div className="flex items-center justify-between">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
              Sign in
            </button>

            <p className="text-sm text-center mt-4 text-gray-600">
              Don&#39;t have an account? <a href="/register" className="text-blue-600 hover:underline">Register here</a>
            </p>
          </form>
        </div>

        {/* Right: Image & Text */}
        <div className="hidden md:block w-full md:w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1050&q=80"
            alt="Login Image"
            className="w-full h-full object-cover"
            />

          <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex flex-col items-center justify-center text-white p-8">
            <h2 className="text-3xl font-bold mb-2">Sign in</h2>
            <p className="text-lg text-center">
              Sign in to your account and explore a world of possibilities. <br /> Your journey begins here.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
