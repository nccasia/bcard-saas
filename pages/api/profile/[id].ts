import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { prisma } from "../../../lib/prisma";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (session) {
    if (req.method === "PUT") {
      const { name, bio, phone, twitter, instagram, facebook } = req.body;

      try {
        await prisma.profile.update({
          where: { id: req.query.id.toString() },
          data: { name, bio, phone, twitter, instagram, facebook },
        });
        res.status(200).json({ message: "Profile updated successfully." });
      } catch (error) {
        console.log(error);
        res.status(500).json({
          error: error,
          errorMessage: "An error occurred while creating your profile.",
        });
      }
    }
  } else {
    res.status(401).json({ errorMessage: "Access Denied." });
  }
}

export default handler;
