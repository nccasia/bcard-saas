import React from "react";

import SelectCard from "../../components/admin/SelectCard";
import HomeLayout from "../../components/home/HomeLayout";

function CardPage(): JSX.Element {
  return (
    <div>
      <HomeLayout>
        <SelectCard />
      </HomeLayout>
    </div>
  );
}

export default CardPage;
