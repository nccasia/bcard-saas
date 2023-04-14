import { NextApiHandler } from "next";
import { NextApiRequest, NextApiResponse } from "next";

//import { getSession } from "next-auth/react";
import { prisma } from "../../../../../lib/prisma";

const saveadmin: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  // const session = await getSession({ req });
  // if (session && session.user && req.method === "PUT") {
  try {
    const { id, email } = req.body;
    const admin = await prisma.admin.update({
      where: {
        id: id,
      },
      data: {
        email: email,
      },
    });
    return res.status(201).json(admin);
  } catch (e) {
    return res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
  // } else {
  //   res.status(401).json({ errorMessage: "Access Denied" });
  // }
};

export default saveadmin;
