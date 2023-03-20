import Head from "next/head";

import CreateProfile from "../CreateProfile";
import Profile from "../Profile";
import {signOut } from "next-auth/react";
import Link from "next/link";
import styles from "../../styles/login.module.css"

function Users({profile, session}: any): JSX.Element {
    return(
        <div>
            <Head>
                <title>Business Card App Users</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <span style={{display: "flex", justifyContent: "center"}}>Xin chào {session.user?.email}</span> <br />
            <button className={styles.button} onClick={() => signOut()}>Sign out</button>
            <br></br>
            <Link href={"../Profile"}>

            <button>Exampe 1</button>   
            </Link>
            <br></br>
            <button>Exampe 2</button>
            {/* {!profile && <CreateProfile email={session.user?.email} />}
            {profile && <Profile profile={profile} />} */}
        </div>
    )
}
export default Users;