import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";

import { authOptions } from "../../../lib/auth";
import { prisma } from "../../../lib/prisma";

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session || !session.user?.email) {
    return res.status(401).json({ errorMessage: "Access Denied" });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ errorMessage: "Method Not Allowed" });
  }

  const email = session.user.email;

  const { Name, Phone, Title, Address, Web, Company, Slogan, Mezon, Zalo, Telegram, Whatsapp, Linkedin } =
    req.body as {
      Name?: string;
      Phone?: string;
      Title?: string;
      Address?: string;
      Web?: string;
      Company?: string;
      Slogan?: string;
      Mezon?: string;
      Zalo?: string;
      Telegram?: string;
      Whatsapp?: string;
      Linkedin?: string;
    };

  try {
    const updated = await prisma.excel.update({
      where: { Email: email },
      data: {
        ...(Name !== undefined ? { Name } : {}),
        ...(Phone !== undefined ? { Phone } : {}),
        ...(Title !== undefined ? { Title } : {}),
        ...(Address !== undefined ? { Address } : {}),
        ...(Web !== undefined ? { Web } : {}),
        ...(Company !== undefined ? { Company } : {}),
        ...(Slogan !== undefined ? { Slogan } : {}),
        ...(Mezon !== undefined ? { Mezon } : {}),
        ...(Zalo !== undefined ? { Zalo } : {}),
        ...(Telegram !== undefined ? { Telegram } : {}),
        ...(Whatsapp !== undefined ? { Whatsapp } : {}),
        ...(Linkedin !== undefined ? { Linkedin } : {}),
      },
    });

    return res.status(200).json(updated);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("[API] Failed to update current user's card", error);
    return res.status(500).json({ errorMessage: "Internal Server Error" });
  }
};

export default handler;
