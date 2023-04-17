/* eslint-disable react/no-children-prop */
import Grid from "@mui/material/Grid";
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
  const [open, setOpen] = React.useState(false);
  //console.log(profile);

  return (
    <div>
      <Head>
        <title>Business Card App</title>
      </Head>
      <LayoutUser children={undefined} open={open} setOpen={setOpen}></LayoutUser>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ marginTop: "50px" }}
      >
        {profile && <ExcelCard profile={profile} params={{ exampe: "1" }} />}
        {!profile && <p>If you don't have a card, please contact the administrator!</p>}
      </Grid>
    </div>
  );
}

export default Name;
