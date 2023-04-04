import type { NextPage } from "next";
import Head from "next/head";
import {  signIn } from "next-auth/react";
import Link from "next/link";
import styles from "../../styles/login.module.css"


const Signup = () => {
  return (
    <div className={styles.signup}>
        <button><Link href="/register/Register">Sign Up</Link>
        </button>
    </div>
  );
};

export default Signup;