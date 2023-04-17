import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { prisma } from "../../../lib/prisma";

const newcard: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session: any = await getSession({ req });
  if (req.method === "POST") {
    try {
      const { Name, Email, Phone, Title } = req.body;
      const test = await prisma.excel.findUnique({
        where: { NameId: Email.split("@")[0] },
      });
      if (!test) {
        const admin = await prisma.excel.create({
          data: {
            NameId: Email.split("@")[0],
            Name: Name,
            Email: Email,
            Phone: Phone,
            Title: Title,
          } as any,
        });
        return res.status(200).json(admin.NameId);
      } else {
        throw new Error("An email existed in the server");
      }
      if (!session) {
        throw new Error("Access Denied");
      }
    } catch (error: any) {
      if (error.message === "An email existed in the server") {
        return res.status(400).json({ errorMessage: "An email existed in the server" });
      }
      if (error.message === "Access Denied") {
        res.status(401).json({ errorMessage: "Access Denied" });
      }
      return res.status(500).json({ errorMessage: "Internal Server Error" });
    } finally {
      await prisma.$disconnect();
    }
  }
};

export default newcard;
