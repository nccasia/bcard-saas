import type { NextPage } from "next";
import Head from "next/head";
import {  signIn } from "next-auth/react";


const Login = () => {
  return (
    <div>
        <button 
          className="bg-gray-400 text-white rounded-md px-4 py-2 hover:bg-gray-600 my-2 active:bg-green-900"
          onClick={(event) => {
            signIn("google", { callbackUrl: "/" });
        }}>
          Log in
        </button>
    </div>
  );
};

export default Login;

