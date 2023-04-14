import { NextApiHandler } from "next";
import { NextApiRequest, NextApiResponse } from "next";

//import { getSession } from "next-auth/react";
import { prisma } from "../../../../../lib/prisma";

const saveAdd: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  // const session: any = await getSession({ req });
  // if (session && session?.user?.isAdmin) {
  if (req.method === "POST") {
    try {
      const { email } = req.body;
      const test = await prisma.admin.findUnique({
        where: { email: email },
      });
      if (!test) {
        const admin = await prisma.admin.create({
          data: {
            email: email,
          },
        });
        return res.status(200).json(admin);
      } else {
        throw new Error("Duplicate Email");
      }
    } catch (error: any) {
      if (error.message === "Duplicate Email") {
        return res.status(400).json({ errorMessage: "Duplicate Email" });
      }
      return res.status(500).json({ errorMessage: "Internal Server Error" });
    } finally {
      await prisma.$disconnect();
    }
  }
  // } else {
  //   res.status(401).json({ errorMessage: "Access Denied" });
  // }
};

export default saveAdd;
