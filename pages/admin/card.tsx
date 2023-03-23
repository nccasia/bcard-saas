import  React from "react"
import HomeLayout from "../../components/home/HomeLayout";
import  SelectCard from "../../components/admin/SelectCard"

function CardPage(): JSX.Element {
  
  return (
    <div>
        <HomeLayout>
            <SelectCard/>
        </HomeLayout>
    </div>
  );
};
  
export default CardPage;