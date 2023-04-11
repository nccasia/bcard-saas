import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
//import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import { prisma } from "../../../lib/prisma";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async session({ session }) {
      const email = session?.user?.email;
      if (email) {
        const admin: any = await prisma.admin.findUnique({
          where: { email: email },
          select: { email: true },
        });
        const isAdmin = admin ? true : false;
        session.user = { ...session.user, ...{ isAdmin: isAdmin } };
      }
      return session;
    },
  },
  providers: [
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     username: { label: "Username", type: "text" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials: any) {
    //     // const { username, password } = credentials as {
    //     //   username: string;
    //     //   password: string;
    //     // };
    //     console.log(credentials);
    //     // const admin: any = await prisma.admin.findUnique({
    //     //   where: { name: username },
    //     // });
    //     // if (admin && admin.password === password) {
    //     //   return admin;
    //     // } else {
    //     return null;
    //     // }
    //   },
    // }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
});
