import React from "react";

import { getCard } from "../../api/admin/apiCard";
import LayoutUser from "../../components/home/LayoutUser";
import KonvaView from "../../components/konvacard/KonvaView";

function ViewCard() {
  const [data, setData] = React.useState<any[]>([]);

  React.useEffect(() => {
    getCard().then((main) => setData(main));
  }, []);

  return (
    <LayoutUser>
      {data
        ? data.map((item: any, index: number) => {
            return (
              <div
                key={index}
                style={{
                  margin: 0,
                  padding: 0,
                  width: "400px",
                  height: "400px",
                  boxSizing: "content-box",
                  overflow: "hidden",
                }}
              >
                <KonvaView data={data} setData={setData} />
              </div>
            );
          })
        : null}
    </LayoutUser>
  );
}
export default ViewCard;
