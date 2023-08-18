import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Dialog, DialogActions, DialogContent } from "@mui/material";
import React from "react";

function DeleteButton({ name, handelDelete }: any) {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="bg-gray-400 text-white rounded-md px-4 py-2 hover:bg-gray-600 my-2 active:bg-green-900"
      >
        Delete
      </button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent sx={{ width: "300px", textAlign: "center" }}>
          <HighlightOffIcon sx={{ fontSize: 120, color: "#f44336ad" }} />
          <h1>
            <b>Are you sure? </b>
          </h1>
          <p>Deactive project: "{name}"</p>
        </DialogContent>
        <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
          <button
            className="bg-gray-400 text-white rounded-md px-4 py-2 hover:bg-gray-600 my-2 active:bg-green-900"
            onClick={() => setOpen(false)}
          >
            Cancel
          </button>
          <button
            className="bg-red-400 text-white rounded-md px-4 py-2 hover:bg-red-600 my-2 active:bg-red-900"
            onClick={() => {
              handelDelete();
              setOpen(false);
            }}
          >
            Save
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteButton;
