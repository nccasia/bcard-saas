import React, { useState } from 'react';
import ExcelJS from 'exceljs';
import {changeExcel} from "../../utils/changeExcel"
import Link from "next/link";
import ExcelCard  from "./ExcelCard"

function Test() {
  const [data, setData] = useState([]);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file:any = event.target.files?event.target.files[0]:null;
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(file);
    const worksheet = workbook.getWorksheet('Sheet1');
    const rows:any = [];
    worksheet.eachRow((row, rowIndex) => {
      rows.push(row.values);
    });
    setData(changeExcel(rows));
  };
 

  return (
    <div>
      <input type="file" onChange={handleUpload} />
      <br></br>
      {data?data.map((item:any, index:number)=>{
        return(
          <div key={index}>
            <p>{item.name}</p>
            <ExcelCard profile={item}/>
            <br></br>
          </div>
        )
      }):null}
    </div>
  );
}

export default Test;

