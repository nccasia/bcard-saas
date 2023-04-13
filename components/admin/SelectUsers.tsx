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

import { getUsers } from "../../api/admin/apiUsers";
import styles from "../../styles/update.module.css";

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
function SelectUsers(): JSX.Element {
  const [users, setUsers] = React.useState<any>([]);
  React.useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  return (
    <div
      style={{
        padding: "20px 0 0 0",
        border: "1px dotted #80808059",
        borderRadius: "10px",
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="customized table">
          <TableBody>
            <StyledTableRow>
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
                Email
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
          <TableBody>
            {users
              ? users.map((item: any) => {
                  return (
                    <StyledTableRow key={item.id}>
                      <StyledTableCell style={{ textAlign: "center" }} component="th" scope="row">
                        <p>{item.name}</p>
                      </StyledTableCell>
                      <StyledTableCell style={{ textAlign: "center" }} component="th" scope="row">
                        <p>{item.email}</p>
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default SelectUsers;
