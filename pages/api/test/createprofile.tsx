import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../../lib/prisma";
//import { getSession } from "next-auth/react";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  //const session = await getSession({ req });
  //if (session) {
  const { data } = req.body;
  if (!data) {
    res.status(400).json({ errorMessage: "Not data" });
  }
  let hasValidData = false;
  data.forEach((item: any) => {
    if ("Email" in item && item.Email) {
      hasValidData = true;
    } else {
      res.status(400).json({ errorMessage: "Not Email" });
      return;
    }
  });

  if (!hasValidData) {
    res.status(400).json({ errorMessage: "No valid data" });
    return;
  }
  if (req.method === "POST") {
    try {
      const list = data.map((main: any) => {
        return { ...main, ...{ NameId: main.Email.split("@")[0] } };
      });
      await prisma.excel.deleteMany();
      await prisma.excel.createMany({
        data: list,
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
}
