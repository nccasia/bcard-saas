import SelectAdmin from "./SelectAdmin";
import SelectUsers from "./SelectUsers";
import SelectCard from "./SelectCard";
import Test from "./Test";
import React from "react";
import {signOut } from "next-auth/react";

function Admin({session}:any) {
  const [open, setOpen]=React.useState("Admin");
  return (
    <div>
      <div style={{display:"flex"}}>
        <ul 
          style={{
            paddingTop:"200px",
            width:"25%",
            height:"100vh",
            textAlign:"center",
            border:"1px dotted gray"
          }}
        >
          <li>
            <p>{session.user?.email}</p>
            <button onClick={() => signOut()}>Sign out</button>  
          </li>
          <br></br>
          <li>
            <button onClick={()=>setOpen("Admin")}>Admin</button>
          </li>
          <li>
            <button onClick={()=>setOpen("Users")}>Users</button>
          </li>
          <li>
            <button onClick={()=>setOpen("Cards")}>Cards</button>
          </li>
        </ul>
        <div
          style={{
            padding:"5%",
            width:"75%",
            height:"100vh",
            border:"1px dotted gray"
          }}
        >
          {open==="Admin" && <SelectAdmin/>}
          {open==="Users" &&  <SelectUsers/>}
          {open==="Cards" && <SelectCard />}
        </div>
      </div>
        
        {/* <Test/> */}
    </div>
  );
};
  
export default Admin;
