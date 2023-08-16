import Grid from "@mui/material/Grid";
import axios from "axios";
import { saveAs } from "file-saver";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

import { getAvatar, getNameCard } from "../../api/admin/apiProfile";
import LayoutUser from "../../components/home/LayoutUser";
import ExcelCard from "../../components/users/ExcelCard";
function Name() {
  const [profile, setProfile] = React.useState<any>();
  const router = useRouter();
  const { name } = router.query;
  const [image, setImage] = React.useState<any>();
  React.useEffect(() => {
    if (name) {
      getNameCard(String(name)).then((main) => setProfile(main));
      getAvatar(String(name)).then((main) => setImage(main));
    }
  }, [name]);
  const imageToBase64 = async (url: string) => {
    const response = await axios.get(url, { responseType: "arraybuffer" });
    const base64Data = Buffer.from(response.data, "binary").toString("base64");
    return base64Data;
  };
  const vcf = async () => {
    const web = "https://www.ncc.asia";
    const company = "NCCPLUS VIETNAM JSC";
    const imageBase64 = await imageToBase64(image);
    const vcardContent = `
BEGIN:VCARD
VERSION:3.0
FN:${profile?.Name}
TEL;TYPE=CELL,voice:${profile?.Phone}
EMAIL;TYPE=PREF,INTERNET:${profile?.Email}
URL:${web}
TITLE:${profile?.Title}
ORG:${company}
PHOTO;TYPE=JPG;ENCODING=B:${imageBase64}
END:VCARD`;
    const blob = new Blob([vcardContent], { type: "text/vcard;charset=utf-8" });
    saveAs(blob, `${profile?.NameId}.vcf`);
  };

  return (
    <div>
      <Head>
        <title>Business Card App</title>
      </Head>
      <LayoutUser></LayoutUser>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ marginTop: "50px" }}
      >
        {profile && <ExcelCard profile={profile} params={{ exampe: "1" }} />}
        {profile && (
          <button
            className="bg-gray-400 text-white rounded-md px-4 py-2 hover:bg-gray-600 my-2 active:bg-green-900"
            onClick={vcf}
          >
            Download vCard
          </button>
        )}
        {!profile && <p>If you don't have a card, please contact the administrator!</p>}
      </Grid>
    </div>
  );
}

export default Name;
