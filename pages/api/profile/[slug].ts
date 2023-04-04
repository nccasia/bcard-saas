import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../../lib/prisma";
//import { getSession } from "next-auth/react";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  // const session = await getSession({ req });

  //if (session) {
  if (req.method === "PUT") {
    try {
      await prisma.profile.update({
        where: { slug: req.query.slug.toString() },
        data: req.body,
      });
      res.status(200).json({ message: "Profile updated successfully." });
    } catch (error) {
      res.status(500).json({
        error: error,
        errorMessage: "An error occurred while creating your profile.",
      });
    }
  }
  // } else {
  //   res.status(401).json({ errorMessage: "Access Denied." });
  // }
}

export default handler;
