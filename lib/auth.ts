import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { type NextAuthOptions } from "next-auth";
import MezonProvider from "next-auth/providers/mezon";

import { prisma } from "./prisma";

export const authOptions: NextAuthOptions = {
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
          where: { email },
          select: { email: true },
        });
        const isAdmin = !!admin;

        session.user = { ...session.user, isAdmin } as typeof session.user & { isAdmin: boolean };
      }
      return session;
    },
  },
  events: {
    async signIn({ user, profile }) {
      const userEmail = user?.email || profile?.email;

      if (!userEmail) {
        return;
      }

      const existingCard = await prisma.excel.findUnique({
        where: { Email: userEmail },
      });

      if (!existingCard) {
        await prisma.excel.create({
          data: {
            Email: userEmail,
            NameId: userEmail.split("@")[0],
            Name: user?.name || profile?.name || userEmail.split("@")[0],
            Avatar: user?.image,
          },
        });
      }
    },
  },
  providers: [
    MezonProvider({
      clientId: process.env.MEZON_CLIENT_ID || "",
      clientSecret: process.env.MEZON_CLIENT_SECRET || "",
      // Allow linking accounts from different OAuth providers that share the same email/username.
      // This avoids OAuthAccountNotLinked errors when a user signs in with another provider.
      allowDangerousEmailAccountLinking: true,
    }),
  ],
};
