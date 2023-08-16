import React from "react";

import HomeLayout from "../../components/home/HomeLayout";
import KonvaCard from "../../components/konvacard/KonvaCard";

interface Konva {
  id: string;
  type: string;
  style: any;
  onclick: boolean;
}

function CreateCard() {
  const [data, setData] = React.useState<Konva[]>([]);
  //console.log(data);

  return (
    <HomeLayout>
      <KonvaCard data={data} setData={setData} />
    </HomeLayout>
  );
}
export default CreateCard;
