import { signOut } from "next-auth/react";

const Logout = () => {
  return (
    <div style={{ width: "100%" }}>
      <button
        style={{ width: "100%", textAlign: "left" }}
        onClick={() => {
          signOut({ redirect: true, callbackUrl: "/login" });
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default Logout;
