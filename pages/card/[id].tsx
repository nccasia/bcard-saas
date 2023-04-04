import React from "react";

import { getKonva } from "../../api/admin/apiCard";
import LayoutUser from "../../components/home/LayoutUser";
import KonvaCard from "../../components/konvacard/KonvaCard";

function Id({ params }: any) {
  const [data, setData] = React.useState<any[]>([]);
  React.useEffect(() => {
    if (params?.id) {
      getKonva("/api/card/" + params?.id).then((main) => {
        setData(main?.card);
      });
    }
  }, [params?.id]);
  const [open, setOpen] = React.useState("edit");

  console.log(data);

  return (
    <div>
      <LayoutUser>
        <KonvaCard data={data} setData={setData} open={open} setOpen={setOpen} />
      </LayoutUser>
    </div>
  );
}

export default Id;

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
