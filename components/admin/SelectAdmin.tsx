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
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import { ToastContainer } from "react-toastify";

import { addAdmin, deleteAdmin, getAdmin, updateAdmin } from "../../api/admin/apiAdmin";
import styles from "../../styles/update.module.css";
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
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [emailAdd, setEmailAdd] = React.useState("");
  const [openEdit, setOpenEdit] = React.useState<number>(-1);
  const [openAdd, setOpenAdd] = React.useState<boolean>(false);
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
      <button
        className="bg-gray-400 text-white rounded-md px-4 py-2 hover:bg-gray-600 my-2 active:bg-green-900"
        style={{ float: "right", marginRight: "10px" }}
        onClick={() => setOpenAdd(true)}
      >
        New Admin
      </button>
      <Dialog open={openAdd} onClose={() => setOpenAdd(false)}>
        <DialogTitle sx={{ textAlign: "center" }}>New Admin</DialogTitle>
        <DialogContent>
          <p>Email:</p>
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
            value={emailAdd}
            onChange={(e) => setEmailAdd(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <button
            onClick={() => {
              setEmailAdd("");
              setOpenAdd(false);
            }}
            className="bg-gray-400 text-white rounded-md px-4 py-2 hover:bg-gray-600 my-2 active:bg-green-900"
          >
            Cancel
          </button>
          <button
            className="bg-gray-400 text-white rounded-md px-4 py-2 hover:bg-gray-600 my-2 active:bg-green-900"
            style={{ display: openAdd ? "block" : "none" }}
            onClick={() => {
              addAdmin(emailAdd).then((data: any) => {
                if (data) {
                  setAdmin([...admin, data]);
                }
              });
              setEmailAdd("");
              setOpenAdd(false);
            }}
          >
            Save
          </button>
        </DialogActions>
      </Dialog>
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
                        {item?.id && openEdit !== item.id}
                        {item?.id}
                      </StyledTableCell>
                      <StyledTableCell style={{ textAlign: "center" }} component="th" scope="row">
                        <p style={{ display: item && openEdit === item.id ? "none" : "block" }}>
                          {item?.email}
                        </p>
                        <input
                          type="text"
                          placeholder={item?.email}
                          className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          style={{ display: item && openEdit === item.id ? "block" : "none" }}
                        />
                      </StyledTableCell>
                      <StyledTableCell className={styles.td} style={{ display: "flex" }}>
                        <button
                          className="bg-gray-400 text-white rounded-md px-4 py-2 hover:bg-gray-600 my-2 active:bg-green-900"
                          onClick={() => setOpenEdit(item.id)}
                          style={{ display: item && openEdit === item.id ? "none" : "block" }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            updateAdmin(item.id, email).then((main: any) => {
                              if (main) {
                                const list = admin.map((main: any) => {
                                  if (main.id === item.id) {
                                    return { ...main, id: item.id, name: name, email: email };
                                  } else {
                                    return main;
                                  }
                                });
                                setAdmin(list);
                              }
                            });
                            setEmail("");
                            setName("");
                            setOpenEdit(-1);
                          }}
                          style={{ display: item && openEdit === item.id ? "block" : "none" }}
                          className="bg-gray-400 text-white rounded-md px-4 py-2 hover:bg-gray-600 my-2 active:bg-green-900"
                        >
                          EDIT
                        </button>
                        <button
                          className="bg-gray-400 text-white rounded-md px-4 py-2 hover:bg-gray-600 my-2 active:bg-green-900"
                          onClick={() => {
                            deleteAdmin(item.id);
                            const list = admin.filter((main: any) => main.id !== item.id);
                            setAdmin(list);
                          }}
                        >
                          Delete
                        </button>
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
  );
}
export default SelectAdmin;
