import { signOut } from "next-auth/react";

import styles from "../../styles/logout.module.css";

const Logout = () => {
  return (
    <div style={{ width: "100%" }}>
      <button
        style={{ width: "100%" }}
        onClick={() => {
          signOut({ redirect: true, callbackUrl: "/login" });
        }}
        className={styles.logout}
      >
        Log out
      </button>
    </div>
  );
};

export default Logout;
