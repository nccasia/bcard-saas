/* eslint-disable react/no-children-prop */
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import { Fab } from "@mui/material";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
// import TextField from "@mui/material/TextField";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

import { getNameCard } from "../../api/profile/apiProfile";
import LayoutUser from "../../components/home/LayoutUser";
import ExcelCard from "../../components/users/ExcelCard";
// import styles from "../../styles/profile.module.css";
function Name() {
  const [profile, setProfile] = React.useState<any>();

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };
  const router = useRouter();
  const { name } = router.query;
  React.useEffect(() => {
    if (name) {
      getNameCard("/api/test/" + name).then((main) => setProfile(main));
    }
  }, [name]);
  const [open, setOpen] = React.useState(false);
  //console.log(profile);

  return (
    <div>
      <Head>
        <title>Business Card App</title>
      </Head>
      <LayoutUser children={undefined} open={open} setOpen={setOpen}></LayoutUser>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ marginTop: "50px" }}
      >
        {profile && <ExcelCard profile={profile} params={{ exampe: "1" }} />}
        {!profile && <p>If you don't have a card, please contact the administrator!</p>}
      </Grid>
      {/* <div style={{ position: "relative" }}>
        <div className={styles.addIcon}>
          <Fab onClick={handleClickOpen} sx={{ width: "50px", height: "50px" }}>
            <AddCircleOutlineIcon sx={{ color: "#1976d2", fontSize: "30px" }} />
          </Fab>
        </div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText>
            <TextField
              margin="dense"
              id="name"
              label="Contact"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button>
          </DialogActions>
        </Dialog>
      </div> */}
    </div>
  );
}

export default Name;
