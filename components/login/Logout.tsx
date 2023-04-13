import { signOut } from "next-auth/react";

const Logout = () => {
  return (
    <div>
      <button
        onClick={() => {
          signOut({ redirect: true, callbackUrl: "/login/login" });
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default Logout;
