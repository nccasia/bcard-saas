import React, { useState } from 'react';
import ExcelJS from 'exceljs';
import {changeExcel} from "../../utils/changeExcel"
import ExcelCard  from "./ExcelCard"
import Link from "next/link";
import styles from "../../styles/profile.module.css"
import Sidebar from '../home/Sidebar';

function Text({params}:any) {
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
    <>
      <Sidebar/>
    <div style={{marginTop: "50px", display: "flex", flexDirection:"column",
      alignItems: "center",gap: "5px" }}>
    <div>
      <Link href="/users/card">Home</Link>
    </div>
      {data?data.map((item:any, index:number)=>{
        return(
          <div key={index}>
            <p>{item.name}</p>
              <ExcelCard profile={item} params={params}/>
          </div>
        )
      }):null}
      <br />
      <input 
        type="file" 
        accept=".xlsx, .xls"
        onChange={handleUpload} 
      />
    </div>
    </>
  );
}

export default Text;

