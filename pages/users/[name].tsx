import React from "react";

import LayoutUser from "../../components/home/LayoutUser";

function Name({ params }: any) {
  console.log(params);
  return (
    <div>
      <LayoutUser> </LayoutUser>
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
