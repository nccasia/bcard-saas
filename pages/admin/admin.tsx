import React from "react";

import SelectAdmin from "../../components/admin/SelectAdmin";
import HomeLayout from "../../components/home/HomeLayout";

function AdminPage() {
  return (
    <div>
      <HomeLayout>
        <SelectAdmin />
      </HomeLayout>
    </div>
  );
}
export default AdminPage;
