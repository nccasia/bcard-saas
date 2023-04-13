import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { signIn } from "next-auth/react";
import * as React from "react";

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
      style={{ backgroundPosition: open === "email" ? "0 -30px" : 0 }}
    >
      <div className={styles.form}>
        <h1 className={styles.heading}>Business Card</h1>
        <div className={styles.boxContent}>
          {open === "" && (
            <div className={styles.content}>
              <button
                onClick={() => {
                  SetOpen("email");
                }}
                className={styles.lgemail}
              >
                SIGN IN WITH EMAIL
              </button>
              <h1>Sign in with Social Networks</h1>
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  style={{ width: "100%" }}
                  className={styles.btNetwork}
                  onClick={() => {
                    signIn("google", { callbackUrl: "/" });
                  }}
                >
                  <GoogleIcon sx={{ color: "white" }} />
                  <p>GOOGLE</p>
                </button>
                <button
                  style={{ width: "100%", backgroundColor: "#2a588a" }}
                  className={styles.btNetwork}
                  onClick={() => {
                    signIn("google", { callbackUrl: "/" });
                  }}
                >
                  <FacebookIcon sx={{ color: "white" }} />
                  <p>FACEBOOK</p>
                </button>
              </div>
              <p style={{ fontSize: "12px" }}>
                By sign in you agree to the <b>Terms</b> and the <b>Condtions</b>
              </p>
            </div>
          )}
          {open === "email" && (
            <ThemeProvider theme={theme}>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  fontStyle={{ background: "#e9ecef", padding: "10px 20px", borderRadius: "10px" }}
                  sx={{
                    marginTop: 8,
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
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      style={{ background: "#1976d2", width: "150px", float: "right" }}
                    >
                      Sign In
                    </Button>
                    <div style={{ marginTop: "70px" }}>
                      <button
                        style={{ width: "100%" }}
                        className="bg-gray-400 text-white rounded-md px-4 py-2 hover:bg-gray-600 my-2 active:bg-green-900"
                        onClick={() => {
                          signIn("google", { callbackUrl: "/" });
                        }}
                      >
                        Log in with google
                      </button>
                    </div>
                  </Box>
                </Box>
              </Container>
            </ThemeProvider>
          )}
        </div>
      </div>
    </div>
  );
}
