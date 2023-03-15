import Link from "next/link";
import React from "react";

function Profile({ profile }: any) {
  return (
    <div className="text-gray-800 text-lg text-left mt-5">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          <Link href={`/profile/${profile.slug}`}>{profile.name}</Link>
        </h1>
        <Link href={`/profile/edit/${profile.slug}`}>
          <button
            type="submit"
            className="bg-gray-100 text-black rounded-md px-2 py-1 hover:bg-gray-50 my-2 active:bg-gray-400 text-base"
          >
            Update Profile
          </button>
        </Link>
      </div>
      <div style={{ width: "300px", height: "150px", backgroundColor: "gray", display: "flex" }}>
        <div style={{ margin: "auto", width: "70px", height: "100px", textAlign: "center", color: "white", fontSize: "14px" }}>
          <img src={profile.logo} alt="hello" style={{ borderRadius: "50%" }} />
          <p>{profile.slogan}</p>
        </div>
      </div>
      <br></br>
      <div style={{ width: "300px", height: "150px", backgroundColor: "gray", display: "flex", justyfiContent: "space-between", fontSize: "12px", color: "white" }}>
        <div style={{ display: "flex", flex: 1 }}>
          <div style={{ margin: "auto", textAlign: "center", color: "white" }}>
            <img src={profile.logo} alt="hello" style={{ borderRadius: "50%" }} width ="50px" height ="50px" />
            <p style={{ paddingLeft: "10px" }}>{profile.slogan}</p>
          </div>
        </div>
        <div style={{ margin: "auto", textAlign: "left", color: "white", flex: 1 }}>
          <p>{profile.name}</p>
          <p>{profile.phone}</p>
          <p>{profile.web}</p>
          <p>{profile.address}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
