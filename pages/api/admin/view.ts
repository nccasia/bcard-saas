/* eslint-disable simple-import-sort/imports */
import { getServerSession } from "next-auth/next";
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

import { authOptions } from "../../../lib/auth";
import { prisma } from "../../../lib/prisma";

const viewAdmin: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session || !session.user || !(session.user as any).isAdmin) {
    return res.status(401).json({ errorMessage: "Access Denied" });
  }

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const admin = await prisma.admin.findMany();
    return res.status(200).json(admin);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export default viewAdmin;
