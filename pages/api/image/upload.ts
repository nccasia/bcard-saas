import formidable from "formidable";
import fs from "fs/promises";
import { NextApiHandler, NextApiRequest } from "next";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

const readFile = (
  req: NextApiRequest,
  saveLocally?: boolean,
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const options: formidable.Options = {};
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), "/public/upload");
    options.filename = (_name, _ext, path) => {
      return Date.now().toString() + "_" + path?.originalFilename;
    };
  }
  options.maxFileSize = 4000 * 1024 * 1024;
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

const handler: NextApiHandler = async (req, res) => {
  try {
    await fs.readdir(path.join(process.cwd() + "/public", "/upload"));
  } catch (error) {
    await fs.mkdir(path.join(process.cwd() + "/public", "/upload"));
  }
  await readFile(req, true).then((main: any) =>
    res.json("/upload/" + main?.files?.image?.newFilename),
  );
};

export default handler;
