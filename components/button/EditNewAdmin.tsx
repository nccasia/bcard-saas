import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

import { addAdmin, updateAdmin } from "../../api/admin/apiAdmin";
interface Admin {
  name?: string | null;
  id?: string | null;
  data: any;
  setData: any;
}

function EditNewAdmin({ name, id, data, setData }: Admin) {
  const {
    handleSubmit,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
    register,
    setValue,
    //watch,
  } = useForm({ mode: "onChange" });
  React.useEffect(() => {
    setValue("email", name ? name : "");
    setValue("id", id ? id : "");
  }, [name, setValue]);
  const [open, setOpen] = React.useState(false);
  const buttonSave = (values: any) => {
    if (!name || !id) {
      addAdmin(values.email).then((main: any) => {
        if (main) {
          setData([...data, main]);
        }
      });
    } else {
      updateAdmin(values.id, values.email).then((main: any) => {
        if (main) {
          const list = data.map((main1: any) => {
            if (main1.id === values.id) {
              return { ...main1, email: values.email };
            } else {
              return main1;
            }
          });
          setData(list);
        }
      });
    }
    setOpen(false);
  };
  return (
    <div>
      <button
        className="bg-gray-400 text-white rounded-md px-4 py-2 hover:bg-gray-600 my-2 active:bg-green-900"
        style={{ float: "right", marginRight: "10px" }}
        onClick={() => setOpen(true)}
      >
        {!name || !id ? "New Admin" : "Edit"}
      </button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <form onSubmit={handleSubmit(buttonSave)} style={{ width: "300px" }}>
          <DialogTitle>
            {!name && "Create"}
            {name && "Edit " + name}
          </DialogTitle>
          <DialogContent>
            <TextField
              type="text"
              label="Email"
              fullWidth
              placeholder="Write your email"
              sx={{ margin: "5px 0 3px 0" }}
              {...register("email", { required: true })}
            />
          </DialogContent>
          <DialogActions>
            <button
              type="button"
              className="bg-gray-400 text-white rounded-md px-4 py-2 hover:bg-gray-600 my-2 active:bg-green-900"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-red-400 text-white rounded-md px-4 py-2 hover:bg-red-600 my-2 active:bg-red-900"
            >
              Save
            </button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
export default EditNewAdmin;
