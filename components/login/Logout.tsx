import Link from "next/link";
// import { signOut } from "next-auth/react";

const Logout = () => {
  return (
    <div>
      <button
      // onClick={() => {
      //   signOut({ redirect: true, callbackUrl: "/login/login" });
      // }}
      >
        {/* Log out */}
        <Link href={"/login"}>Log out</Link>
      </button>
    </div>
  );
};

export default Logout;
