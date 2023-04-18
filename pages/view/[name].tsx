import Grid from "@mui/material/Grid";
import { saveAs } from "file-saver";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

import { getNameCard } from "../../api/profile/apiProfile";
import LayoutUser from "../../components/home/LayoutUser";
import ExcelCard from "../../components/users/ExcelCard";
function Name() {
  const [profile, setProfile] = React.useState<any>();
  const router = useRouter();
  const { name } = router.query;
  React.useEffect(() => {
    if (name) {
      getNameCard(String(name)).then((main) => setProfile(main));
    }
  }, [name]);

  const vcf = () => {
    const web = "https://www.ncc.asia";
    //const logo = "/logo.png";
    const company = "NCCPLUS VIETNAM JSC";
    const vcardContent = `
    BEGIN:VCARD
    VERSION:4.0
    N:${profile?.Name}
    TEL;TYPE=CELL:${profile?.Phone}
    EMAIL;TYPE=INTERNET:${profile?.Email}
    URL:${web}
    TITLE: ${profile?.Title}
    ORG:${company}
    END:VCARD
    `;
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
            Add Contact
          </button>
        )}
        {!profile && <p>If you don't have a card, please contact the administrator!</p>}
      </Grid>
    </div>
  );
}

export default Name;
