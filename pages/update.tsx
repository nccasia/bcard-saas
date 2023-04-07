import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { Button, Input, InputLabel } from "@mui/material";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { updateProfile } from "../api/profile/apiProfile";
import excel from "../public/excel.png";
import styles from "../styles/update.module.css";
import { changeExcel } from "../utils/changeExcel";
import { fileSize } from "../utils/fileSize";

function Update() {
  const [data, setData] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const [nameFile, setNameFile] = useState("");
  const [sizeFile, setSizeFile] = useState(0);
  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: any = event.target.files ? event.target.files[0] : null;
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(file);
    const worksheet = workbook.getWorksheet("Sheet1");
    const rows: any = [];
    worksheet.eachRow((row) => {
      rows.push(row.values);
    });
    setData(changeExcel(rows));
    //const fileName = file ? file.name : "";
    setNameFile(file ? file.name : "");
    setSizeFile(file ? file.size : "");
    setOpen(true);
  };
  //console.log(data)

  const exampleExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Sheet1");
    worksheet.columns = [
      { header: "name", key: "name", width: 30 },
      { header: "username", key: "username", width: 30 },
      { header: "email", key: "email", width: 30 },
      { header: "phone", key: "phone", width: 30 },
      { header: "position", key: "position", width: 30 },
      { header: "company", key: "company", width: 30 },
      // { header: "logo", key: "logo", width: 30 },
      //   { header: 'slogan', key: 'slogan', width: 30 },
      { header: "web", key: "web", width: 30 },
      { header: "address", key: "address", width: 40 },
    ];
    const data = [
      {
        name: "dai.trinhduc",
        username: "Trịnh Đức Đại",
        email: "dai.trinhduc@ncc.asia",
        phone: "(+84) 2466874606",
        position: "Vinh Branch Manager",
        company: "NCCPLUS VIETNAM JSC",
        // logo: "https://funix.edu.vn/wp-content/uploads/2019/07/8.-NCC.jpg",
        // slogan:"We do it with passion",
        web: "http://ncc.asia",
        address: "4th Floor, 138 Ha Huy Tap St., Vinh City, Nghe An Province, Vietnam",
      },
    ];
    worksheet.addRows(data);
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, "example.xlsx");
  };
  const router: any = useRouter();
  console.log(data);

  return (
    <div className={styles.container}>
      {!open && (
        <div>
          <h1 className={styles.heading}>CREATE YOUR CARD</h1>
          <InputLabel htmlFor="file-upload">
            <Input
              id="file-upload"
              type="file"
              inputProps={{
                style: { display: "none", margin: 0 },
                accept: ".xlsx, .xls",
                onChange: handleUpload,
              }}
            />
            <Button
              component="span"
              sx={{
                display: "flex",
                flexDirection: "column",
                color: "black",
                margin: 0,
                fontSize: "14px",
                border: "1px dotted gray",
                borderRadius: "10px",
                padding: "0 20px",
                textAlign: "center",
                width: "360px",
                height: "250px",
                //backgroundColor:"#D9D9D9",
              }}
            >
              <FileUploadOutlinedIcon sx={{ fontSize: "100px" }} />
              <div style={{ marginTop: "30px" }}>
                <p>Select a file or drop it here</p>
                <p style={{ fontSize: "12px" }}>Support: .xlsx</p>
              </div>
            </Button>
          </InputLabel>
          <div className={styles.template}>
            <div
              style={{
                float: "right",
                marginTop: "10px",
              }}
            >
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "5px",
                  fontSize: "14px",
                  gap: 5,
                  padding: "5px 10px",
                }}
                className="bg-green-600 text-white rounded-md px-4 py-2 hover:bg-green-800 my-2 active:bg-green-900"
                onClick={exampleExcel}
              >
                <p>Download Template</p>
                <SaveAltIcon sx={{ fontSize: "18px" }} />
              </button>
            </div>
          </div>
        </div>
      )}
      {open && (
        <div>
          <h1 className={styles.heading}>CREATE YOUR CARD</h1>
          <div className={styles.boxcontent}>
            <div>
              <FileUploadOutlinedIcon sx={{ fontSize: "80px" }} />
              <p>1 file selected</p>
            </div>
            <InputLabel htmlFor="file-upload">
              <Input
                id="file-upload"
                type="file"
                inputProps={{
                  style: { display: "none", margin: 0 },
                  accept: ".xlsx, .xls",
                  onChange: handleUpload,
                }}
              />
              <Button component="span">
                <div className={styles.content}>
                  <Image src={excel} width={50} height={50} alt="excel" />
                  <div>
                    <p>{nameFile}</p>
                    <p>{fileSize(sizeFile)}</p>
                  </div>
                </div>
              </Button>
            </InputLabel>
            <button
              onClick={() => {
                if (data) {
                  router.push("/" + data[0]?.name);
                  updateProfile(data);
                }
              }}
              style={{
                marginTop: "10px",
                padding: "5px 20px",
                width: 110,
              }}
              className="bg-green-600 text-white rounded-md px-4 py-2 hover:bg-green-800 my-2 active:bg-green-900"
            >
              Upload
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Update;
