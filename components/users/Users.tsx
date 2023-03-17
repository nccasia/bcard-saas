import Head from "next/head";

import CreateProfile from "../CreateProfile";
import Profile from "../Profile";
import {signOut } from "next-auth/react";

function Users({profile, session}: any): JSX.Element {
    return(
        <div>
            <Head>
                <title>Business Card App Users</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {session.user?.email} <br />
            <button onClick={() => signOut()}>Sign out</button>
            <br></br>
            <br></br>
            <button>Exampe 1</button>
            <br></br>
            <button>Exampe 2</button>
            {/* {!profile && <CreateProfile email={session.user?.email} />}
            {profile && <Profile profile={profile} />} */}
        </div>
    )
}
export default Users;