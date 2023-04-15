import "react-toastify/dist/ReactToastify.css";

import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import {
  Button,
  Dialog,
  DialogContent,
  Input,
  InputLabel,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableRow,
} from "@mui/material";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

import { getProfile, updateProfile } from "../../api/profile/apiProfile";
import HomeLayout from "../../components/home/HomeLayout";
//import Logout from "../../components/login/Logout";
// import Sidebar from "../components/home/Sidebar";
import excel from "../../public/excel.png";
//import logo from "../../public/logo.png";
// import styles from "../styles/admin.module.css";
import styles from "../../styles/update.module.css";
import { changeExcel } from "../../utils/changeExcel";
import { fileSize } from "../../utils/fileSize";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
function Update() {
  const [data, setData] = useState<any>([]);
  const [open, setOpen] = useState("");
  const [openDia, setOpenDia] = useState(false);
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
    setOpen("upload");
  };
  //console.log(data);
  // const router = useRouter();
  const exampleExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Sheet1");
    worksheet.columns = [
      //{ header: "NameId", key: "NameId", width: 30 },
      { header: "Name", key: "Name", width: 30 },
      { header: "Title", key: "Title", width: 30 },
      { header: "Email", key: "Email", width: 30 },
      { header: "Phone", key: "Phone", width: 30 },
      // { header: "Address", key: "Address", width: 40 },
      // { header: "Company", key: "Company", width: 30 },
      // { header: "Web", key: "Web", width: 30 },
    ];
    const data = [
      {
        //NameId: "dai.trinhduc",
        Name: "Trịnh Đức Đại",
        Title: "Vinh Branch Manager",
        Email: "dai.trinhduc@ncc.asia",
        Phone: "(+84) 2466874606",
        // Address: "4th Floor, 138 Ha Huy Tap St., Vinh City",
        // Company: "NCCPLUS VIETNAM JSC",
        // Web: "http://ncc.asia",
      },
    ];
    worksheet.addRows(data);
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, "example.xlsx");
  };
  const [datalink, setDataLink] = useState<any>([]);
  React.useEffect(() => {
    getProfile().then((main: any) => setDataLink(main));
  }, []);
  // const router: any = useRouter();
  // const [session, setSession] = React.useState<any>();
  // React.useEffect(() => {
  //   getSession().then((data) => setSession(data));
  // }, []);

  return (
    <HomeLayout>
      <Dialog open={openDia} onClose={() => setOpenDia(false)}>
        <DialogContent>
          {/* <div className={styles.container}> */}
          <div>
            {open === "" && (
              <div>
                {/* <h1 className={styles.heading}>CREATE YOUR CARD</h1> */}
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
                    className={styles.fileUp}
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
                      <p>Select a file</p>
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
            {open === "upload" && (
              <div>
                {/* <h1 className={styles.heading}>CREATE YOUR CARD</h1> */}
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
                    <Button component="span" className={styles.fileUp}>
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
                        setOpenDia(false);
                        updateProfile(data).then((main: any) => {
                          if (main) {
                            setDataLink(main);
                          }
                        });
                        // router.push(`/$`);
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
          {/* </div> */}
        </DialogContent>
      </Dialog>
      <div
        style={{
          padding: "30px 0 30px 0",
          border: "1px dotted #80808059",
          borderRadius: "10px",
        }}
      >
        <button
          className="bg-gray-400 text-white rounded-md px-4 py-2 hover:bg-gray-600 my-2 active:bg-green-900"
          style={{ float: "right", marginRight: "10px" }}
          onClick={() => setOpenDia(true)}
        >
          Upload Excel
        </button>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="customized table">
            <TableBody>
              <StyledTableRow>
                <StyledTableCell
                  className={styles.th}
                  style={{ fontSize: "18px", textAlign: "center" }}
                >
                  ID
                </StyledTableCell>
                <StyledTableCell
                  className={styles.th}
                  style={{ fontSize: "18px", textAlign: "center" }}
                >
                  Name
                </StyledTableCell>
                <StyledTableCell
                  className={styles.th}
                  style={{ fontSize: "18px", textAlign: "center" }}
                >
                  Link
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
            <TableBody>
              {datalink
                ? datalink.map((item: any, index: number) => {
                    return (
                      <StyledTableRow key={index}>
                        <StyledTableCell style={{ textAlign: "center" }} component="th" scope="row">
                          <p>{index + 1}</p>
                        </StyledTableCell>
                        <StyledTableCell style={{ textAlign: "center" }} component="th" scope="row">
                          <p>{item?.NameId}</p>
                        </StyledTableCell>
                        <StyledTableCell className={styles.td} style={{ textAlign: "center" }}>
                          <Link href={"/card/" + item?.NameId}>
                            {`${process.env.NEXT_PUBLIC_BASE_URL}/card/${item.NameId}`}
                          </Link>
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  })
                : null}
            </TableBody>
          </Table>
        </TableContainer>
        <ToastContainer />
      </div>
    </HomeLayout>
  );
}

export default Update;
