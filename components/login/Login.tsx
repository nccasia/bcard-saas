import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { Checkbox, FormControlLabel } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import { signIn } from "next-auth/react";
import * as React from "react";

import facebook from "../../public/facebook.png";
import google from "../../public/google.png";
import styles from "../../styles/login.module.css";
const theme = createTheme();

export default function Login() {
  const [open, SetOpen] = React.useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div
      className={styles.container}
      // style={{ backgroundPosition: open === "email" ? "0 -115px" : 0 }}
    >
      <div className={styles.form}>
        <div className={styles.boxContent}>
          {open === "" && (
            <div className={styles.content}>
              <h1 className={styles.heading}>Business Card</h1>
              <button
                onClick={() => {
                  SetOpen("email");
                }}
                className={styles.lgemail}
              >
                SIGN IN WITH EMAIL
              </button>
              <h1 style={{ fontSize: "18px" }}>Sign in with Social Networks</h1>
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  style={{ width: "100%" }}
                  className={styles.btNetwork}
                  onClick={() => {
                    signIn("google", { callbackUrl: "/login/login" });
                  }}
                >
                  <GoogleIcon sx={{ color: "white" }} />
                  <p>GOOGLE</p>
                </button>
                <button
                  style={{ width: "100%", backgroundColor: "#2a588a" }}
                  className={styles.btNetwork}
                  // onClick={() => {
                  //   signIn("google", { callbackUrl: "/login/login" });
                  // }}
                >
                  <FacebookIcon sx={{ color: "white" }} />
                  <p>FACEBOOK</p>
                </button>
              </div>
              <p style={{ fontSize: "13px" }}>
                By sign in you agree to the <b>Terms</b> and the <b>Conditions</b>
              </p>
            </div>
          )}
          {open === "email" && (
            <>
              <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                  <CssBaseline />
                  <h1 className={styles.heading}>Business Card</h1>
                  <Box
                    // fontStyle={{ background: "#e9ecef", padding: "10px 20px", borderRadius: "10px" }}
                    sx={{
                      // marginTop: 8,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                      />
                      <FormControlLabel
                        style={{ float: "left" }}
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                      />
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        style={{ background: "#1976d2" }}
                      >
                        Sign In
                      </Button>
                      <p>Or connect using locial media</p>
                      <div className={styles.icon}>
                        <button
                          onClick={() => {
                            signIn("google", { callbackUrl: "/" });
                          }}
                        >
                          <Image src={google} alt="google" width={20} height={20} />
                        </button>
                        <button
                        // onClick={() => {
                        //   signIn("google", { callbackUrl: "/login/login" });
                        // }}
                        >
                          <Image src={facebook} alt="google" width={20} height={20} />
                        </button>
                      </div>
                    </Box>
                  </Box>
                </Container>
              </ThemeProvider>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
