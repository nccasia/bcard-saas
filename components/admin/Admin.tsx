import SelectAdmin from "./SelectAdmin";
import SelectUsers from "./SelectUsers";
import SelectCard from "./SelectCard";
import Test from "./Test";
import React from "react";
import styles from "../../styles/admin.module.css"
import {signOut } from "next-auth/react";
function Admin({session}:any) {
  const [open, setOpen]=React.useState("Admin");
  return (
    <div>
      <div>
        <div className={styles.menuitem}>
          <button className={styles.button} onClick={()=>setOpen("Admin")}>Admin</button>
           <button className={styles.button} onClick={()=>setOpen("Users")}>Users</button>
          <button className={styles.button} onClick={()=>setOpen("Cards")}>Cards</button>
            
        </div>
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
