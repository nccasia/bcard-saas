import  React from "react"
import { prisma } from "../../lib/prisma";
import {getCard} from "../../api/admin/apiCard";

function SelectCard() {
  const [users, setUsers]=React.useState<any>([]);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [openEdit, setOpenEdit] = React.useState<number>(-1);
  React.useEffect(()=>{
    getCard().then((data)=>setUsers(data))
  },[]);

  return (
    <div>
        <br></br>
        <p>Table Card</p>
        
        <table>
          <tr>
            <td>Id</td>
            <td>Card</td>
          </tr>
          {users? users.map((item:any)=>{
            return(
              <tr key={item.id}>
                  <td>
                    <p>{item.id}</p>
                  </td>
                  <td>
                    <img src={item.card} alt="hello" width="100px" height="100px"/>
                  </td>
              </tr>
            )
          }):null}
        </table>
    </div>
  );
};
  
export default SelectCard;