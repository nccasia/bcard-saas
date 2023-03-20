import type { NextPage } from "next";
import Head from "next/head";
import { getSession, GetSessionParams, signIn, signOut } from "next-auth/react";

import Users from "../users/Users";
import { prisma } from "../../lib/prisma";
import styles from "../../styles/login.module.css"

const Login = () => {
  return (
    <div className={styles.login}>
        <span className={styles.span}>Not signed in</span> <br />
        <button className={styles.button}  onClick={() => signIn()}>Sign in</button>
    </div>
  );
};

export default Login;

