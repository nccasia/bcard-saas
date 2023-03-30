import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { prisma } from "../../../lib/prisma";

async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const session = await getSession({ req });

//   if (session) {
    const { id } = req.query;
    if (req.method === "GET") {
      try {
        const data=await prisma.card.findUnique({
          where: { id: Number(id) },
          select: { card: true },
        });
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({
          error: error,
          errorMessage: "An error occurred while creating your profile.",
        });
      }
    }
//   } else {
//     res.status(401).json({ errorMessage: "Access Denied." });
//   }
}

export default handler;