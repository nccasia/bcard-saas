import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { prisma } from "../../../lib/prisma";

const createCard: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session: any = await getSession({ req });
  if (req.method === "POST") {
    try {
      const { name, card, image } = req.body;
      if (!name || !card || !image) {
        throw new Error("Invalid input data");
      }
      const admin: any = await prisma.card.create({
        data: {
          name: name,
          card: card,
          image: image,
        },
      });
      if (image === "Active") {
        await prisma.card.updateMany({
          where: {
            id: { not: admin?.id },
            image: "Active",
          },
          data: {
            image: "Deactive",
          },
        });
      }
      return res.status(200).json(admin);
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

export default createCard;
