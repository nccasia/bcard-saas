import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { prisma } from "../../../../lib/prisma";

async function handlerIdAdmin(req: NextApiRequest, res: NextApiResponse) {
  const session: any = await getSession({ req });
  if (session && session?.user?.isAdmin) {
    const { NameId } = req.query;
    // const excelId = parseInt(id as string, 10);
    if (req.method === "DELETE") {
      try {
        const excel = await prisma.excel.delete({
          where: {
            NameId: String(NameId),
          },
        });
        return res.status(201).json(excel);
      } catch (e) {
        return res.status(500).json({ error: "Internal Server Error" });
      } finally {
        await prisma.$disconnect();
      }
    }
  } else {
    res.status(401).json({ errorMessage: "Access Denied." });
  }
}

export default handlerIdAdmin;
