import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import MezonProvider from "next-auth/providers/mezon";

import { prisma } from "../../../lib/prisma";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async session({ session }) {
      const email = session?.user?.email;
      if (email) {
        const admin = await prisma.admin.findUnique({
          where: { email: email },
          select: { email: true },
        });
        const isAdmin = !!admin;

        session.user = { ...session.user, ...{ isAdmin: isAdmin } };
      }
      return session;
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    MezonProvider({
      clientId: process.env.MEZON_CLIENT_ID || "",
      clientSecret: process.env.MEZON_CLIENT_SECRET || "",
    }),
  ],
});
