import { prisma } from "../../../../lib/prisma";
import { NextApiHandler } from 'next';
import { PrismaClient } from '@prisma/client';
import { getSession } from "next-auth/react";
import { NextApiRequest, NextApiResponse } from "next";

const adminAll: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  if(req.method==="GET"){
    try {
      const admin = await prisma.admin.findMany();
      return res.status(200).json(admin);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "Internal Server Error 113" });
    } finally {
      await prisma.$disconnect();
    }
  }
  if(req.method==="POST"){
    try {
      const {name, email} = req.body;
      const admin = await prisma.admin.create({
        data: {
          name: name,
          email: email,
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
  if(req.method==="DELETE"){
    try {
      const {id} = req.body;
      const admin = await prisma.admin.delete({
        where: {
          id: id,
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
  if(req.method==="PUT"){
    try {
      const {id, name, email} = req.body;
      const admin = await prisma.admin.update({
        where: {
          id: id,
        },
        data: {
          name: name,
          email:email,
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

export default adminAll;