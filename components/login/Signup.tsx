import type { NextPage } from "next";
import Head from "next/head";
import {  signIn } from "next-auth/react";
import Link from "next/link";


const Signup = () => {
  return (
    <div>
        <button><Link href="/register/Register">Sign Up</Link>
        </button>
    </div>
  );
};

export default Signup;