import Link from "next/link";

import styles from "../../styles/login.module.css";

const Signup = () => {
  return (
    <div className={styles.signup}>
      <button>
        <Link href="/register/Register">Sign Up</Link>
      </button>
    </div>
  );
};

export default Signup;
