import React from "react";

import styles from "../../styles/admin.module.css";
import SelectUsers from ".//SelectUsers";
import SelectAdmin from "./SelectAdmin";
import SelectCard from "./SelectCard";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Admin({ session }: any) {
  const [open, setOpen] = React.useState("Admin");
  return (
    <div>
      <div>
        <div className={styles.menuitem}>
          <button className={styles.button} onClick={() => setOpen("Admin")}>
            Admin
          </button>
          <button className={styles.button} onClick={() => setOpen("Users")}>
            Users
          </button>
          <button className={styles.button} onClick={() => setOpen("Cards")}>
            Cards
          </button>
        </div>
        <div>
          {open === "Admin" && <SelectAdmin />}
          {open === "Users" && <SelectUsers />}
          {open === "Cards" && <SelectCard />}
        </div>
      </div>

      {/* <Test/> */}
    </div>
  );
}

export default Admin;
