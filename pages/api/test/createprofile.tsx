import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../../lib/prisma";
//import { getSession } from "next-auth/react";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  //const session = await getSession({ req });
  //if (session) {
  const { data } = req.body;
  if (!data || data.length === 0) {
    res.status(400).json({ errorMessage: "Empty data" });
    return;
  } else {
    data.forEach((item: any) => {
      if (!("Email" in item && item.Email)) {
        res.status(400).json({ errorMessage: "No valid data(Email,...)" });
      }
    });
    const duplicateEmails: any = [];
    for (let i = 0; i < data.length; i++) {
      for (let j = i + 1; j < data.length; j++) {
        if (data[i].Email === data[j].Email) {
          if (!duplicateEmails.includes(data[i].Email)) {
            duplicateEmails.push(data[i].Email);
          }
        }
      }
    }
    if (duplicateEmails.length > 0) {
      res.status(400).json({ errorMessage: "Duplicate Emails: \n" + duplicateEmails.join(", ") });
    }
  }

  if (req.method === "POST") {
    try {
      const excel = await prisma.excel.findMany();
      const list = data.map((main: any) => {
        return { ...main, ...{ NameId: main.Email.split("@")[0] } };
      });
      const differentElements = list.filter((listElement: any) => {
        return !excel.some((excelElement: any) => {
          return listElement.Email === excelElement.Email;
        });
      });
      const sameElements = list.filter((listElement: any) => {
        return excel.some((excelElement: any) => {
          return listElement.Email === excelElement.Email;
        });
      });
      if (differentElements.length > 0) {
        await prisma.excel.createMany({
          data: differentElements,
          skipDuplicates: true,
        });
      }
      if (sameElements.length > 0) {
        for (const element of sameElements) {
          await prisma.excel.update({
            where: {
              Email: element.Email,
            },
            data: element,
          });
        }
      }
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
        errorMessage: "Error Server",
      });
    }
  }
}
