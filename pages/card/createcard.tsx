import React from "react";

import { updateCard } from "../../api/admin/apiCard";
//import LayoutUser from "../../components/home/LayoutUser";
import KonvaCard from "../../components/konvacard/KonvaCard";

interface Konva {
  id: string;
  type: string;
  style: any;
  onclick: boolean;
}

function CreateCard() {
  const [data, setData] = React.useState<Konva[]>([]);

  return (
    <div>
      <button
        className="bg-gray-400 text-white rounded-md px-4 py-2 hover:bg-gray-600 my-2 active:bg-green-900"
        onClick={() =>
          updateCard({
            name: "hêlo",
            card: data,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAWJaMK1saVYSIBXjItyjHcx2HD8RH09iGJg&usqp=CAU",
          })
        }
      >
        Save New
      </button>
      <KonvaCard data={data} setData={setData} />
    </div>
  );
}
export default CreateCard;
