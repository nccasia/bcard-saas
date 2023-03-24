import type { NextPage } from "next";
import Head from "next/head";
import { getSession, GetSessionParams, signIn, signOut } from "next-auth/react";

import Users from "../users/Users";
import { prisma } from "../../lib/prisma";
import styles from "../../styles/login.module.css"

const Login = () => {
  return (
    <div>
        <button 
          className="bg-gray-400 text-white rounded-md px-4 py-2 hover:bg-gray-600 my-2 active:bg-green-900"
          onClick={(event) => {
            signIn("google", { callbackUrl: "/" });
        }}>
          Sign in
        </button>
    </div>
  );
};

export default Login;

