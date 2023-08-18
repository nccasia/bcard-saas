import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../../lib/prisma";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  //   const session = await getSession({ req });

  //   if (session) {
  const { name } = req.query;
  //console.log(name);
  if (req.method === "GET") {
    try {
      const data = await prisma.user.findUnique({
        where: { email: String(name + "@ncc.asia") },
      });
      res.status(200).json(data?.image);
    } catch (error) {
      res.status(500).json({
        error: error,
        errorMessage: "An error occurred while creating your profile.",
      });
    }
  }
  //   } else {
  //     res.status(401).json({ errorMessage: "Access Denied." });
  //   }
}

export default handler;
