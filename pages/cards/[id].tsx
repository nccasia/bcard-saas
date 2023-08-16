//import ExcelJS from "exceljs";
//import { saveAs } from "file-saver";
import { useRouter } from "next/router";
import React from "react";

import { getKonva } from "../../api/admin/apiCard";
import HomeLayout from "../../components/home/HomeLayout";
import KonvaCard from "../../components/konvacard/KonvaCard";

function Id() {
  const [data, setData] = React.useState<any[]>([]);
  const [name, setName] = React.useState<string>("");
  const [id1, setId1] = React.useState<number>(0);
  const [active, setActive] = React.useState<string>("");
  const router = useRouter();
  const { id } = router.query;
  React.useEffect(() => {
    if (id) {
      getKonva(String(id)).then((main) => {
        setData(main?.card);
        setName(main?.name);
        setId1(main?.id);
        setActive(main?.image);
      });
    }
  }, [id]);
  console.log(id1);
  return (
    <div>
      <HomeLayout>
        {!data && <p>Not Card</p>}
        {data && <KonvaCard data={data} setData={setData} name={name} id={id1} active={active} />}
      </HomeLayout>
    </div>
  );
}

export default Id;
