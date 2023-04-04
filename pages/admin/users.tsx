import React from "react";

import SelectUsers from "../../components/admin/SelectUsers";
import HomeLayout from "../../components/home/HomeLayout";

function UsersPage(): JSX.Element {
  return (
    <div>
      <HomeLayout>
        <SelectUsers />
      </HomeLayout>
    </div>
  );
}

export default UsersPage;
