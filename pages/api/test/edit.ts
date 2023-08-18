import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { prisma } from "../../../lib/prisma";

const editCard: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session: any = await getSession({ req });
  if (req.method === "POST") {
    try {
      const { id, name, card, image } = req.body;
      if (!id || !name || !card || !image) {
        throw new Error("Invalid input data");
      }
      if (image === "Active") {
        await prisma.card.updateMany({
          where: {
            id: { not: id },
            image: "Active",
          },
          data: {
            image: "Deactive",
          },
        });
      }
      await prisma.card.update({
        where: {
          id: id,
        },
        data: {
          name: name,
          card: card,
          image: image,
        },
      });
      return res.status(200).json(true);
      if (!session) {
        throw new Error("Access Denied");
      }
    } catch (error: any) {
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

export default editCard;
