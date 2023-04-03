import React, { useState } from 'react';
import ExcelJS from 'exceljs';
import {changeExcel} from "../utils/changeExcel"
import {updateProfile} from "../api/profile/apiProfile"
import { Input, InputLabel, Button } from '@mui/material';

function Update(){

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

        const fileName = file ? file.name : '';
        const fileNameSpan:any = document.getElementById('file-name');
        fileNameSpan.textContent = fileName;
    };
    //console.log(data)


    return(
        <div
            style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                height:"100vh",
            }}
        >
            <InputLabel htmlFor="file-upload">
                <Input
                    id="file-upload"
                    type="file"
                    inputProps={{
                        style: { display: 'none' },
                        accept: ".xlsx, .xls",
                        onChange: handleUpload,
                    }}
                />
                <Button
                    component="span"
                    className="bg-gray-400 text-black rounded-md px-2 py-1 hover:bg-gray-50 my-2 active:bg-gray-400 text-base"
                >
                    Chose Excel
                </Button>
                <span id="file-name" style={{marginRight:"5px"}}></span>
            </InputLabel>
            <button
                className="bg-gray-400 text-gray rounded-md px-2 py-1 hover:bg-gray-50 my-2 active:bg-gray-400 text-base"
                onClick={()=>updateProfile(data?data:null)}
            >
                Save Change
            </button>
        </div>
    )
}

export default Update;