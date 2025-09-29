import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from 'bcrypt';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        const { email, password } = credentials;

        await connectDB();
        const user = await User.findOne({ email });
        if (!user) throw new Error("No user found");

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) throw new Error("Invalid credentials");

        return { id: user._id, name: user.name, email: user.email, role: user.role };
      }
    }),
  ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    }
  },
  pages: {
    signIn: '/login'
  }
});

export { handler as GET, handler as POST };
