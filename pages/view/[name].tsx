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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "50px",
      }}
    >
      {profile && <ExcelCard profile={profile} params={{ exampe: "1" }} />}
      {!profile && <p>No...</p>}
    </div>
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
