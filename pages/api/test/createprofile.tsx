import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../../lib/prisma";
//import { getSession } from "next-auth/react";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  //const session = await getSession({ req });
  //if (session) {
  if (req.method === "POST") {
    try {
      const { data } = req.body;
      await prisma.excel.deleteMany();
      await prisma.excel.createMany({
        data: data,
        skipDuplicates: true,
      });
      const excel1 = await prisma.excel.findMany({
        select: {
          NameId: true,
        },
      });
      res.status(200).json(excel1);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: error,
        errorMessage: "An error occurred while creating your profile.",
      });
    }
  }
  // else {
  //   res.status(405).end({ errorMessage: "Request method not allowed." });
  //}
  // } else {
  //   res.status(401).json({ errorMessage: "Access Denied." });
  // }
}
