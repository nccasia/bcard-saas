import type { NextPage } from "next";
import Head from "next/head";
import { getSession, GetSessionParams, signIn, signOut } from "next-auth/react";

import Users from "../users/Users";
import { prisma } from "../../lib/prisma";

const Login = () => {
  return (
    <div>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
};

export default Login;

