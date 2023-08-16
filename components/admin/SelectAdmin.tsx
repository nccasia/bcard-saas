import "react-toastify/dist/ReactToastify.css";

import {
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableRow,
} from "@mui/material";
import React from "react";
import { ToastContainer } from "react-toastify";

import { deleteAdmin, getAdmin } from "../../api/admin/apiAdmin";
import styles from "../../styles/update.module.css";
import DeleteButton from "../button/DeleteButton";
import EditNewAdmin from "../button/EditNewAdmin";
interface TypeAdmin {
  id: number;
  name: string;
  email: string;
}
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

function SelectAdmin(): JSX.Element {
  const [admin, setAdmin] = React.useState<TypeAdmin[]>([]);
  React.useEffect(() => {
    getAdmin().then((data) => setAdmin(data));
  }, []);
  //console.log(admin);
  return (
    <div
      style={{
        padding: "20px 0 0 0",
        border: "1px dotted #80808059",
        borderRadius: "10px",
      }}
    >
      <EditNewAdmin name={null} id={null} data={admin} setData={setAdmin} />
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
                Email
              </StyledTableCell>
              <StyledTableCell
                className={styles.th}
                style={{ fontSize: "18px", textAlign: "center" }}
              >
                Action
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
          <TableBody>
            {admin
              ? admin.map((item: any) => {
                  return (
                    <StyledTableRow key={item?.id}>
                      <StyledTableCell style={{ textAlign: "center" }} component="th" scope="row">
                        {item?.id}
                      </StyledTableCell>
                      <StyledTableCell style={{ textAlign: "center" }} component="th" scope="row">
                        {item?.email}
                      </StyledTableCell>
                      <StyledTableCell className={styles.td} style={{ display: "flex" }}>
                        <EditNewAdmin
                          name={item?.email}
                          id={item?.id}
                          data={admin}
                          setData={setAdmin}
                        />
                        <DeleteButton
                          name={item?.email}
                          handelDelete={() => {
                            deleteAdmin(item?.id).then((main: any) => {
                              if (main) {
                                const list = admin.filter((main1: any) => main1.id !== item?.id);
                                setAdmin(list);
                              }
                            });
                          }}
                        />
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })
              : null}
          </TableBody>
        </Table>
      </TableContainer>
      <ToastContainer position="bottom-right" />
    </div>
  );
}
export default SelectAdmin;
