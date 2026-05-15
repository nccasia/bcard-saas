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
        Mezon: main?.Mezon || "",
        Zalo: main?.Zalo || "",
        Telegram: main?.Telegram || "",
        Whatsapp: main?.Whatsapp || "",
        Linkedin: main?.Linkedin || "",
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
          <TextField
            margin="normal"
            fullWidth
            label="Mezon"
            placeholder="Profile link"
            InputLabelProps={{ shrink: true }}
            inputProps={{ maxLength: 5000 }}
            {...register("Mezon")}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Zalo"
            placeholder="Phone or profile link"
            InputLabelProps={{ shrink: true }}
            inputProps={{ maxLength: 120 }}
            {...register("Zalo")}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Telegram"
            placeholder="Username, phone, or profile link"
            InputLabelProps={{ shrink: true }}
            inputProps={{ maxLength: 120 }}
            {...register("Telegram")}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Whatsapp"
            placeholder="Phone or chat link"
            InputLabelProps={{ shrink: true }}
            inputProps={{ maxLength: 120 }}
            {...register("Whatsapp")}
          />
          <TextField
            margin="normal"
            fullWidth
            label="LinkedIn"
            placeholder="Profile handle or link"
            InputLabelProps={{ shrink: true }}
            inputProps={{ maxLength: 160 }}
            {...register("Linkedin")}
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
