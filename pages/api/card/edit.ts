import { NextApiHandler } from "next";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { prisma } from "../../../lib/prisma";

const editexcard: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  try {
    const { NameId, Name, Email, Phone, Title } = req.body;
    const admin = await prisma.excel.update({
      where: {
        NameId: NameId,
      },
      data: {
        Name: Name,
        Email: Email,
        Phone: Phone,
        Title: Title,
      },
    });
    return res.status(201).json(admin);
    if (!session) {
      throw new Error("Access Denied");
    }
  } catch (error: any) {
    if (error.message === "Access Denied") {
      res.status(401).json({ errorMessage: "Access Denied" });
    }
    return res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
};

export default editexcard;
