import React from "react";

import { getCardTrue } from "../../api/admin/apiCard";
import LayoutUser from "../../components/home/LayoutUser";
import KonvaView from "../../components/konvacard/KonvaView";

function ViewCard() {
  const [data, setData] = React.useState<any>([]);

  React.useEffect(() => {
    getCardTrue().then((main: any) => {
      if (main.length === 1) {
        main.map((main1: any) => {
          setData(main1.card);
        });
      }
    });
  }, []);
  //console.log(data);

  return (
    <LayoutUser>
      <div
        style={{
          marginTop: "13vh",
          width: "100%",
          padding: "0 10px",
          display: "flex",
          //justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <KonvaView data={data} setData={setData} />
      </div>
    </LayoutUser>
  );
}
export default ViewCard;
