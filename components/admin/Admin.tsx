import SelectAdmin from "./select/SelectAdmin";
import SelectUsers from "./SelectUsers";
import SelectCard from "./SelectCard";
import Test from "./Test";
import Link from "next/link";
import { useRouter } from 'next/router';
import React from "react";

function Admin() {
  const [open, setOpen]=React.useState("Admin");
  return (
    <div>
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <ul>
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
        <div>
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
