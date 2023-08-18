import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";

import { editCard, updateCard } from "../../api/admin/apiCard";

const actives = ["Active", "Deactive"];

interface Card {
  data: any;
  open: boolean;
  setOpen: any;
  name?: string;
  id?: number;
  active?: string;
}

function EditNewCard({ data, open, setOpen, name, id, active }: Card) {
  const {
    handleSubmit,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
    register,
    setValue,
    watch,
  } = useForm({ mode: "onChange" });
  React.useEffect(() => {
    setValue("name", name ? name : "");
    setValue("active", active ? active : "Active");
    setValue("card", data ? data : []);
  }, [active, data, name, setValue]);
  //console.log(watch("active"));
  const route = useRouter();
  const buttonSave = (values: any) => {
    if (!name && !id && !active) {
      updateCard({
        name: values.name,
        image: values.active,
        card: values.card,
      }).then((main) => {
        if (main) {
          route.push("/admin/card");
        }
      });
    } else {
      editCard({
        id: id,
        name: values.name,
        image: values.active,
        card: values.card,
      }).then((main) => {
        if (main) {
          route.push("/admin/card");
        }
      });
    }
  };
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <form onSubmit={handleSubmit(buttonSave)} style={{ width: "300px" }}>
        <DialogTitle>
          {!name && !id && !active && "Create"}
          {name && id && active && "Edit " + name}
        </DialogTitle>
        <DialogContent>
          <TextField
            type="text"
            label="Name"
            fullWidth
            size="small"
            placeholder="Write your name"
            sx={{ margin: "5px 0 3px 0" }}
            {...register("name", { required: true })}
          />
          <TextField
            select
            label="Active"
            fullWidth
            size="small"
            sx={{ margin: "5px 0 3px 0" }}
            {...register("active", { required: true })}
            defaultValue={watch("active")}
          >
            {actives.map((option: string) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
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
            className="bg-gray-400 text-white rounded-md px-4 py-2 hover:bg-gray-600 my-2 active:bg-green-900"
          >
            Save
          </button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default EditNewCard;
