import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { prisma } from "../../../lib/prisma";

const newadmin: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session: any = await getSession({ req });
  if (req.method === "POST") {
    try {
      const { email } = req.body;
      if (!email) {
        throw new Error("Invalid input data");
      }
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
      if (error.message === "Access Denied") {
        res.status(401).json({ errorMessage: "Access Denied" });
      }
      if (error.message === "Invalid input data") {
        res.status(400).json({ errorMessage: "Invalid input data" });
      }
      return res.status(500).json({ errorMessage: "Internal Server Error" });
    } finally {
      await prisma.$disconnect();
    }
  }
};

export default newadmin;
