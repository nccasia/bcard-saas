import React from "react";

import SelectCard from "../../components/admin/SelectCard";
import HomeLayout from "../../components/home/HomeLayout";

function CardPage(): JSX.Element {
  return (
    <div>
      <HomeLayout>
        <div style={{ padding: "100px 10px 10px 10px" }}>
          <SelectCard />
        </div>
      </HomeLayout>
    </div>
  );
}

export default CardPage;
