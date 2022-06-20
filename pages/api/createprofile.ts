import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { prisma } from "../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (session) {
    if (req.method === "POST") {
      const { name, email, bio, phone, twitter, instagram, facebook } = req.body;

      try {
        await prisma.profile.create({
          data: {
            name,
            email: session.user?.email || email,
            bio,
            phone,
            twitter,
            instagram,
            facebook,
            user: { connect: { email: session.user?.email || email } },
          },
        });
        res.status(201).json({ message: "Profile created." });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "An error occurred while creating your profile." });
      }
    } else {
      res.status(405).end({ message: "Request method not allowed." });
    }
  } else {
    res.status(401).json({ message: "Access Denied." });
  }
}
