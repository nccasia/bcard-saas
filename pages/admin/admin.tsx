import HomeLayout from "../../components/home/HomeLayout"
import  React from "react"
import SelectAdmin from "../../components/admin/SelectAdmin"

function AdminPage(){
    return(
        <div>
            <HomeLayout>
                <SelectAdmin/>
            </HomeLayout>
        </div>
    )
}
export default AdminPage;