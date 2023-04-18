import { signOut } from "next-auth/react";

import styles from "../../styles/logout.module.css";

const Logout = () => {
  return (
    <div>
      <button
        onClick={() => {
          signOut({ redirect: true, callbackUrl: "/login" });
        }}
        className={styles.logout}
      >
        Log out
        {/* <Link href={"/login"}>Log out</Link> */}
      </button>
    </div>
  );
};

export default Logout;
