import Link from "next/link";
import React from "react";

function Profile({ profile }: any) {
  return (
    <div className="text-gray-800 text-lg text-left mt-5">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">{profile.name}</h1>
        <p>{profile.bio}</p>
        <Link href={`/profile/${profile.slug}`}>
          <button
            type="submit"
            className="bg-gray-100 text-black rounded-md px-2 py-1 hover:bg-gray-50 my-2 active:bg-gray-400 text-base"
          >
            Update Profile
          </button>
        </Link>
      </div>

      <ul>
        <li>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </li>
        <li>
          <a href={`tel:${profile.phone}`}>{profile.phone}</a>
        </li>
        <li>
          <a href={profile.instagram} target="_blank" rel="noopener noreferrer">
            {profile.instagram}
          </a>
        </li>
        <li>
          <a href={profile.twitter} target="_blank" rel="noopener noreferrer">
            {profile.twitter}
          </a>
        </li>
        <li>
          <a href={profile.facebook} target="_blank" rel="noopener noreferrer">
            {profile.facebook}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
