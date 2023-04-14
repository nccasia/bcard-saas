import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { useRouter } from "next/router";
import React from "react";

import { getKonva } from "../../api/admin/apiCard";
import { updateCard } from "../../api/admin/apiCard";
//import LayoutUser from "../../components/home/LayoutUser";
import KonvaCardView from "../../components/konvacard/KonvaCardView";

function Id() {
  const [data, setData] = React.useState<any[]>([]);
  const router = useRouter();
  const { id } = router.query;
  React.useEffect(() => {
    if (id) {
      getKonva("/api/card/" + id).then((main) => {
        setData(main?.card);
      });
    }
  }, [id]);
  const exampleExcel = async () => {
    const columns = [] as any;
    const rows = {} as any;
    data
      .filter((main: any) => main.type === "text")
      .map((main1: any) => {
        columns.push({ header: main1.id, key: main1.id, width: 30 });
        rows[main1.id] = main1.style?.text;
      });
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Sheet1");
    worksheet.columns = columns;
    worksheet.addRows([rows]);
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, "example.xlsx");
  };
  //const [dataText, setDataText] = React.useState<any[]>([]);
  const uploadExcel = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: any = event.target.files ? event.target.files[0] : null;
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(file);
    const worksheet = workbook.getWorksheet("Sheet1");
    const rows: any = [];
    const headerRow: any = worksheet.getRow(1);
    const headerValues = headerRow.values;
    worksheet.eachRow((row: any, rowIndex: number) => {
      if (rowIndex !== 1) {
        const rowData = row.values;
        const rowObject = {} as any;
        rowData.forEach((cellValue: any, cellIndex: any) => {
          const headerValue = headerValues[cellIndex];
          rowObject[headerValue] = cellValue;
        });
        rows.push(rowObject);
      }
    });
  };
  const test: any = {
    name: "hello",
    position: "PM",
    email: "@.com",
    phone: "113",
    web: "http://",
  };

  const testButton = () => {
    const list = data.map((main: any) => {
      if (test[main.id] && main.type === "text") {
        return { ...main, style: { ...main.style, text: test[main.id] } };
      } else {
        return main;
      }
    });
    setData(list);
  };

  return (
    <div>
      {/* <LayoutUser> */}
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
      <button
        className="bg-gray-400 text-white rounded-md px-4 py-2 hover:bg-gray-600 my-2 active:bg-green-900"
        onClick={exampleExcel}
      >
        Dowload Excel
      </button>
      <button
        className="bg-gray-400 text-white rounded-md px-4 py-2 hover:bg-gray-600 my-2 active:bg-green-900"
        onClick={testButton}
      >
        Test
      </button>
      <input type="file" onChange={uploadExcel} accept=".xlsx, .xls" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <KonvaCardView data={data} setData={setData} />
      </div>
      {/* </LayoutUser> */}
    </div>
  );
}

export default Id;
