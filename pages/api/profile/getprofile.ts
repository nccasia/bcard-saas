import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { prisma } from "../../../lib/prisma";
//import { slugify } from "../../../lib/slugify";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  //if (session) {
  if (req.method === "GET") {
    try {
      const data = await prisma.profile.findUnique({
        where: {
          email: session?.user?.email || "",
        },
      });
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: error,
        errorMessage: "An error occurred while creating your profile.",
      });
    }
  } else {
    res.status(405).end({ errorMessage: "Request method not allowed." });
  }
  // } else {
  //   res.status(401).json({ errorMessage: "Access Denied." });
  // }
}
