import Link from "next/link";
import React from "react";

function Profile({ profile }: any) {
  return (
    <div className="text-gray-800 text-lg text-left mt-5">
      <div className="mb-6">
        <Link href={`/profile/edit/${profile.slug}`}>
          <button
            type="submit"
            className="bg-gray-100 text-black rounded-md px-2 py-1 hover:bg-gray-50 my-2 active:bg-gray-400 text-base"
          >
            Update Profile
          </button>
        </Link>
        <br></br>
        <Link href={`/profile/${profile.slug}`}>
          <button
            type="submit"
            className="bg-gray-100 text-black rounded-md px-2 py-1 hover:bg-gray-50 my-2 active:bg-gray-400 text-base"
          >
            Card
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
