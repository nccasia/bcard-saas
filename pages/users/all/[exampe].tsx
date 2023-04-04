import React from "react";

import LayoutUser from "../../../components/home/LayoutUser";
import Text from "../../../components/users/Text";

function Exampe({ params }: any) {
  console.log(params);
  return (
    <div>
      <LayoutUser>
        <Text params={params} />
      </LayoutUser>
    </div>
  );
}

export default Exampe;

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
