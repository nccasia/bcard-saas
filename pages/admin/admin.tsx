import React from "react";

import SelectAdmin from "../../components/admin/SelectAdmin";
import HomeLayout from "../../components/home/HomeLayout";

function AdminPage() {
  return (
    <div>
      <HomeLayout>
        <div style={{ padding: "100px 10px 10px 10px" }}>
          <SelectAdmin />
        </div>
      </HomeLayout>
    </div>
  );
}
export default AdminPage;
