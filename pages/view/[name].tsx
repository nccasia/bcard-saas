/* eslint-disable react/no-children-prop */
import Grid from "@mui/material/Grid";
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
      getNameCard("/api/test/" + name).then((main) => setProfile(main));
    }
  }, [name]);
  const [open, setOpen] = React.useState(false);
  //console.log(profile);

  return (
    <>
      <LayoutUser children={undefined} open={open} setOpen={setOpen}></LayoutUser>

      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ marginTop: "50px" }}
      >
        {profile && <ExcelCard profile={profile} params={{ exampe: "1" }} />}
        {!profile && <p>No...</p>}
      </Grid>
    </>
  );
}

export default Name;
