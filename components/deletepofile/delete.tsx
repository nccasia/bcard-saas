import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";

import { deleteProfile } from "../../api/profile/apiProfile";

function Delete(props: any) {
  // const [dataLink, setDataLink] = React.useState<any>([]);
  const { NameId, dataLink, setDataLink } = props;
  // console.log(list);
  const [open, setOpen] = React.useState(false);
  // console.log(Array.isArray(dataLink));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlDelete = (NameId: string) => {
    // Xóa data có ID là props.Nameid
    deleteProfile(NameId).then((main) => {
      if (main) {
        if (dataLink) {
          const profile = dataLink.filter((main: any) => main.NameId !== NameId);
          setDataLink(profile);
        }
      }
    });
    // .then(() => {
    //   getProfile().then((main: any) => setDataLink(main)); // Lấy lại danh sách các bản ghi mới và cập nhật lại state dataLink
    // });
    // ...
    handleClose();
  };
  return (
    <div>
      <button
        className="bg-gray-400 text-white rounded-md px-4 py-2 hover:bg-gray-600 my-2 active:bg-green-900"
        onClick={handleClickOpen}
      >
        Delete
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <RemoveCircleOutlineIcon sx={{ color: "#f8bb86", fontSize: "85px" }} />
        </div>
        <DialogTitle
          sx={{ textAlign: "center", fontWeight: "700", width: "300px" }}
          id="alert-dialog-title"
        >
          {"Are you sure"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ textAlign: "center" }} id="alert-dialog-description">
            <b>Delete: "{NameId}"?</b>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => handlDelete(NameId)}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default React.memo(Delete);
