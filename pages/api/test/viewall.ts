import { NextApiHandler } from "next";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { prisma } from "../../../lib/prisma";

const viewCard: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session: any = await getSession({ req });
  if (session && session?.user?.isAdmin) {
    if (req.method === "GET") {
      try {
        const admin: any = await prisma.card.findMany();
        return res.status(200).json(admin);
      } catch (e) {
        //console.error(e);
        return res.status(500).json({ error: "Internal Server Error" });
      } finally {
        await prisma.$disconnect();
      }
    }
  } else {
    res.status(401).json({ errorMessage: "Access Denied." });
  }
};

export default viewCard;
