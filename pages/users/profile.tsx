import React from "react";

import HomeLayout from "../../components/home/HomeLayout";
import Profile from "../../components/users/Profile";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ProfilePage({ profile }: any) {
  return (
    <div>
      <HomeLayout>
        <Profile />
      </HomeLayout>
    </div>
  );
}

export default ProfilePage;
