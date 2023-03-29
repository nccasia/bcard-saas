import { prisma } from "../../../../lib/prisma";
import { NextApiHandler } from 'next';
import { PrismaClient } from '@prisma/client';
import { getSession } from "next-auth/react";
import { NextApiRequest, NextApiResponse } from "next";

const cardAll: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  // if (!session) {
  //   return res.status(401).json({ error: "Unauthorized" });
  // }
  if(req.method==="GET"){
    try {
      const user= await prisma.card.findMany();
      return res.status(200).json(user);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "Internal Server Error 113" });
    } finally {
      await prisma.$disconnect();
    }
  }
  if(req.method==="POST"){
    try {
      const {name, card, image}:any = req.body;
      const admin = await prisma.card.create({
        data: {
          name: name,
          card: card,
          image:image,
        },
      })
      return res.status(200).json(admin);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "Internal Server Error 113" });
    } finally {
      await prisma.$disconnect();
    }
  }
};

export default cardAll;