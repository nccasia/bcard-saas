import { NextApiHandler } from "next";
import { NextApiRequest, NextApiResponse } from "next";

//import { getSession } from "next-auth/react";
import { prisma } from "../../../../lib/prisma";

const getadmin: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  // const session = await getSession({ req });
  // if (session && session.user) {
  if (req.method === "POST") {
    try {
      const { email } = req.body;
      const admin = await prisma.admin.create({
        data: {
          email: email,
        },
      });
      return res.status(201).json(admin);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "Internal Server Error 113" });
    } finally {
      await prisma.$disconnect();
    }
  }
  // } else {
  //   res.status(403).json({ errorMessage: "Forbidden" });
  // }
};

export default getadmin;
