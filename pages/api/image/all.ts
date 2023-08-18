import fs from "fs/promises";
import { NextApiHandler } from "next";
import path from "path";

const handler: NextApiHandler = async (req, res) => {
  try {
    const images = await fs.readdir(path.join(process.cwd() + "/public", "/upload"));
    res.json(images);
  } catch (error) {
    // await fs.mkdir(path.join(process.cwd() + "/public", "/upload"));
  }
};

export default handler;
