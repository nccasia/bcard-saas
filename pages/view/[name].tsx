import Grid from "@mui/material/Grid";
import React from "react";

import { getNameCard } from "../../api/profile/apiProfile";
import ExcelCard from "../../components/users/ExcelCard";
function Name({ params }: any) {
  const [profile, setProfile] = React.useState<any>();
  React.useEffect(() => {
    if (params?.name) {
      getNameCard("/api/test/" + params?.name).then((main) => {
        if (main.length === 1) {
          main.map((item: any) => {
            setProfile({ ...item });
          });
        }
      });
    }
  }, [params?.name]);

  //console.log(profile);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ overflowX: "auto", padding: "20px" }}
    >
      {profile && <ExcelCard profile={profile} params={{ exampe: "1" }} />}
      {!profile && <p>No...</p>}
    </Grid>
  );
}

export default Name;

export async function getStaticProps({ params }: any) {
  return {
    props: { params },
  };
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};
