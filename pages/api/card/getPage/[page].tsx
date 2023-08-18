import { NextApiHandler } from "next";
import { NextApiRequest, NextApiResponse } from "next";

//import { getSession } from "next-auth/react";
import { prisma } from "../../../../lib/prisma";

const getprofile: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  // const session: any = await getSession({ req });
  // if (!session || session?.user?.isAdmin) {
  //   return res.status(401).json({ error: "Access Denied." });
  // }
  if (req.method === "GET") {
    try {
      const { page } = req.query;
      const excel = await prisma.excel.findMany({
        select: {
          NameId: true,
        },
        skip: (Number(page) - 1) * 5,
        take: 5,
        orderBy: {
          NameId: "asc",
        },
      });
      const excel1 = await prisma.excel.findMany({
        select: {
          NameId: true,
        },
      });
      return res.status(200).json({ data: excel, total: excel1?.length });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ errorMessage: "Internal Server Error" });
    } finally {
      await prisma.$disconnect();
    }
  }
};

export default getprofile;
