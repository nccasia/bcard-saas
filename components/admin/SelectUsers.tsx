import  React from "react"
import { prisma } from "../../lib/prisma";
import {getUsers} from "../../api/admin/apiUsers";

function SelectUsers(): JSX.Element {
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
        <table
          style={{
            width:"100%",
          }}
        >
          <thead>
          <tr
            style={{
              textAlign:"center",
              border:"1px dotted gray",
              backgroundColor:"#8080803d"
            }}
          >
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users? users.map((item:any)=>{
              return(
                <tr 
                  key={item.id}
                  style={{
                    border:"1px dotted gray",
                    textAlign:"center",
                  }}
                >
                    <td>
                      <img src={item.image} alt="empty" width="50px" height="50px"/>
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
          </tbody>
        </table>
    </div>
  );
};
  
export default SelectUsers;