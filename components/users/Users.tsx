import Head from "next/head";
import React from "react";
import CreateProfile from "../CreateProfile";
import Profile from "../Profile";
import {signOut } from "next-auth/react";
import Card  from "./Card";
import Text  from "./Text";

function Users({profile, session}: any): JSX.Element {
    const [open, setOpen]=React.useState("profile");
    return(
        <div>
            <Head>
                <title>Business Card App Users</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div style={{display:"flex"}}>
                <ul
                    style={{
                        paddingTop:"150px",
                        width:"25%",
                        height:"100vh",
                        textAlign:"center",
                        border:"1px dotted gray",
                        position:"fixed",
                      }}
                >
                    <li>
                        {session.user?.email} 
                        <br></br>
                        <button 
                            className="bg-indigo-700 text-white rounded-md px-4 py-2 hover:bg-indigo-600 my-2 active:bg-green-900"
                            onClick={() => signOut()}
                        >
                            Sign out
                        </button>
                    </li>
                    <br></br>
                    <li>
                        <button onClick={()=>setOpen("profile")}>Profile</button>
                    </li>
                    <li>
                        <button onClick={()=>setOpen("card")}>Card</button>
                    </li>
                    <li>
                        <button onClick={()=>setOpen("text")}>Text</button>
                    </li>
                </ul>
                <div
                    style={{
                        // padding:"10%",
                        width:"75%",
                        height:"100vh",
                        marginLeft:"25%",
                    }}
                >
                    {open==="profile" && !profile && <CreateProfile email={session.user?.email} />} 
                    {open==="profile" && profile && <Profile profile={profile} />}
                    {open==="card" && <Card profile={profile}/>}
                    {open==="text" && <Text/>}
                </div>
            </div> 
        </div>
    )
}
export default Users;