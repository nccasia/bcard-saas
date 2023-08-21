//import { google } from "googleapis";
// import { NextApiHandler } from "next";
// import { NextApiRequest, NextApiResponse } from "next";
// import nodemailer from "nodemailer";

// const oAuth2Client = new google.auth.OAuth2(
//   process.env.GOOGLE_CLIENT_ID,
//   process.env.GOOGLE_CLIENT_SECRET,
//   process.env.GOOGLE_REDIRECT_URI,
// );
// oAuth2Client.setCredentials({ refresh_token: `${process.env.GOOGLE_REFRESH_TOKEN}` });

//const sendEmail: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
// if (req.method === "POST") {
//   try {
//     const { email, vCard, name, nameFile } = req.body;
//     const accessToken = await oAuth2Client.getAccessToken();
//     const transporterOptions: any = {
//       service: "gmail",
//       auth: {
//         type: "OAuth2",
//         user: process.env.GOOGLE_SEND_EMAIL,
//         clientId: process.env.GOOGLE_CLIENT_ID,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//         refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
//         accessToken: accessToken,
//       },
//     };
//     const transporter = nodemailer.createTransport(transporterOptions);
//     const vCardBuffer = Buffer.from(vCard, "utf-8");
//     const mailOptions = {
//       from: `Komu.vn: <${process.env.GOOGLE_SEND_EMAIL}>`,
//       to: email,
//       subject: "Send VCard",
//       text: `Hello!\n\n ${name} has sent you their contact details.\n\nYou can view and add their information to your address book by downloading the file attached to this message.\n\nCheers,\nYour friends at NCC`,
//       attachments: [
//         {
//           filename: `${nameFile}.vcf`,
//           content: vCardBuffer,
//         },
//       ],
//     };
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: "Email sent successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "An error occurred" });
//   }
// } else {
//   res.status(405).json({ error: "Method not allowed." });
// }
//};
const sendEmail = () => {
  //console.log();
};
export default sendEmail;
