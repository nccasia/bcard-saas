import { signIn } from "next-auth/react";
import React from "react";

const Login = () => {
  return (
    <div>
      <button
        onClick={() => {
          signIn("google", { callbackUrl: "/login/login" });
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
