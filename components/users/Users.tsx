import Head from "next/head";

import CreateProfile from "../CreateProfile";
import Profile from "../Profile";
import {signOut } from "next-auth/react";
import Link from "next/link";
import styles from "../../styles/login.module.css"


function Users({profile, session}: any): JSX.Element {
    return(
        <div className={styles.container}>
            <Head>
                <title>Business Card App Users</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {session.user?.email} <br />
            {/* <button onClick={() => signOut()}>Sign out</button> */}
            <button>Exampe 1</button>
            <button>Exampe 2</button>
            {!profile && <CreateProfile email={session.user?.email} />} 
            {profile && <Profile profile={profile} />}
        </div>
    )
}
export default Users;