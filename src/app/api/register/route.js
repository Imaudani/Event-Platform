import { connectDB } from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcrypt';

export async function POST(req) {
  const { name, email, password } = await req.json();
  if (!name || !email || !password) {
    return new Response(JSON.stringify({ message: 'Missing fields' }), { status: 400 });
  }

  await connectDB();

  const userExists = await User.findOne({ email });
  if (userExists) {
    return new Response(JSON.stringify({ message: 'Email already used' }), { status: 409 });
  }

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed, role: 'admin' });

  return new Response(JSON.stringify({ message: 'User created', user }), { status: 201 });
}
