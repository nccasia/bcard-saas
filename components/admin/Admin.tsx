import SelectAdmin from "./select/SelectAdmin";
import SelectUsers from "./SelectUsers";
import SelectCard from "./SelectCard";
import Test from "./Test";
import Link from "next/link";
import { useRouter } from 'next/router';
import React from "react";
import styles from "../../styles/admin.module.css"

function Admin() {
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
