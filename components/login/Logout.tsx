import { signOut } from "next-auth/react";

const Logout = () => {
  return (
    <div>
      <button
        className="bg-gray-400 text-white rounded-md px-4 py-2 hover:bg-gray-600 my-2 active:bg-green-900"
        onClick={() => {
          signOut({ redirect: true, callbackUrl: "/" });
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default Logout;
