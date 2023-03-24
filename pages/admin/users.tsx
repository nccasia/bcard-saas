import  React from "react"
import HomeLayout from "../../components/home/HomeLayout";
import SelectUsers from "../../components/admin/SelectUsers"

function UsersPage(): JSX.Element {
  
  return (
    <div>
        <HomeLayout>
            <SelectUsers/>
        </HomeLayout>
    </div>
  );
};
  
export default UsersPage;