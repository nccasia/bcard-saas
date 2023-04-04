import { NextApiHandler } from "next";
import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../../lib/prisma";
//import { getSession } from "next-auth/react";

const ExampleCard: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  //const session = await getSession({ req });
  // if (!session) {
  //   return res.status(401).json({ error: "Unauthorized" });
  // }
  if (req.method === "GET") {
    try {
      const user = await prisma.card.findMany();
      return res.status(200).json(user);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "Internal Server Error 113" });
    } finally {
      await prisma.$disconnect();
    }
  }
};

export default ExampleCard;
