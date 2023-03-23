import Link from "next/link";
import React from "react";
import HomeLayout  from "../../components/home/HomeLayout";
import Profile  from "../../components/users/Profile";

function ProfilePage({ profile }: any) {
  return (
    <div>
        <HomeLayout>
           <Profile/>
        </HomeLayout>
    </div>
  );
}

export default ProfilePage;

