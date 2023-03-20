import  React from "react"
import { prisma } from "../../lib/prisma";
import {getUsers} from "../../api/admin/apiUsers";

function SelectUsers() {
  const [users, setUsers]=React.useState<any>([]);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [openEdit, setOpenEdit] = React.useState<number>(-1);
  React.useEffect(()=>{
    getUsers().then((data)=>setUsers(data))
  },[]);
  
  return (
    <div>
        <br></br>
        <p>Table Users</p>
        <table>
          <tr>
            <td>Avatar</td>
            <td>Name</td>
            <td>Email</td>
          </tr>
          {users? users.map((item:any)=>{
            return(
              <tr key={item.id}>
                  <td>
                    <img src={item.image} alt="hello" width="50px" height="50px"/>
                  </td>
                  <td>
                    <p>{item.name}</p>
                  </td>
                  <td>
                    <p>{item.email}</p>
                  </td>
              </tr>
            )
          }):null}
        </table>
    </div>
  );
};
  
export default SelectUsers;