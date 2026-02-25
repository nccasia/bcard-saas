import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import React from "react";
import { useForm } from "react-hook-form";

import { getNameCard } from "../../api/admin/apiProfile";
import { type MyCardPayload, updateMyCard } from "../../api/users/apiMyCard";

interface MyCardEditDialogProps {
  open: boolean;
  onClose: () => void;
  shortName: string;
  onUpdated: (profile: any) => void;
}

function MyCardEditDialog({ open, onClose, shortName, onUpdated }: MyCardEditDialogProps) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<MyCardPayload>({ mode: "onChange" });

  React.useEffect(() => {
    if (!open || !shortName) return;

    const loadProfile = async () => {
      const main = await getNameCard(shortName);
      if (!main) return;
      reset({
        Name: main?.Name || "",
        Email: main?.Email || "",
        Phone: main?.Phone || "",
        Title: main?.Title || "",
        Address: main?.Address || "",
        Web: main?.Web || "",
        Company: main?.Company || "",
        Slogan: main?.Slogan || "",
      });
    };

    void loadProfile();
  }, [open, shortName, reset]);

  const onSubmit = async (values: MyCardPayload) => {
    const updated = await updateMyCard(values);
    if (!updated) return;
    onUpdated(updated);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>Edit card</DialogTitle>
        <DialogContent>
          <TextField
            margin="normal"
            fullWidth
            label="Name"
            InputLabelProps={{ shrink: true }}
            inputProps={{ maxLength: 60 }}
            {...register("Name")}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Email"
            disabled
            InputLabelProps={{ shrink: true }}
            inputProps={{ maxLength: 100 }}
            {...register("Email")}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Phone"
            InputLabelProps={{ shrink: true }}
            inputProps={{ maxLength: 25 }}
            {...register("Phone")}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Title"
            InputLabelProps={{ shrink: true }}
            inputProps={{ maxLength: 60 }}
            {...register("Title")}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Company"
            InputLabelProps={{ shrink: true }}
            inputProps={{ maxLength: 80 }}
            {...register("Company")}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Web"
            InputLabelProps={{ shrink: true }}
            inputProps={{ maxLength: 120 }}
            {...register("Web")}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Address"
            InputLabelProps={{ shrink: true }}
            inputProps={{ maxLength: 160 }}
            {...register("Address")}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Slogan"
            InputLabelProps={{ shrink: true }}
            inputProps={{ maxLength: 120 }}
            {...register("Slogan")}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" disabled={isSubmitting}>
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default MyCardEditDialog;
