import  React from "react"
import { prisma } from "../../lib/prisma";
import {getCard} from "../../api/admin/apiCard";

function SelectCard(): JSX.Element {
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
              <th>Id</th>
              <th>Card</th>
            </tr>
          </thead>
          <tbody>
            {users? users.map((item:any)=>{
              return(
                <tr 
                  key={item.id}
                  style={{
                    border:"1px dotted gray",
                    textAlign:"center"
                  }}
                >
                    <td>
                      <p>{item.id}</p>
                    </td>
                    <td
                      style={{
                        display:"flex",
                        justifyContent:"center"
                      }}
                    >
                      <img src={item.card} alt="hello" width="200px" height="200px"/>
                    </td>
                </tr>
              )
            }):null}
          </tbody>
        </table>
    </div>
  );
};
  
export default SelectCard;