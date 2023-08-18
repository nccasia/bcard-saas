import { NextApiHandler } from "next";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { prisma } from "../../../lib/prisma";

const editadmin: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  try {
    const { id, email } = req.body;
    if (!id || !email) {
      throw new Error("Invalid input data");
    }
    await prisma.admin.update({
      where: {
        id: id,
      },
      data: {
        email: email,
      },
    });
    return res.status(201).json(true);
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
    return res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
};

export default editadmin;
