import  React from "react"
import { prisma } from "../../lib/prisma";
import {getCard} from "../../api/admin/apiCard";
import styles from "../../styles/admin.module.css"
import KonvaView  from "../users/KonvaView"
import KonvaEdit from "../users/KonvaEdit"

function SelectCard(): JSX.Element {
  const [users, setUsers]=React.useState<any>([]);
  const [data, setData]=React.useState<any>([]);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [openEdit, setOpenEdit] = React.useState<number>(-1);
  React.useEffect(()=>{
    getCard().then((main)=>{
      setUsers(main);
      setData(main.map((item:any) => item.card));
    })
  },[]);

  //console.log(users);

  return (
    <div
      style={{
        padding:"40px 0 0 0",
        border:"1px dotted #80808059",
        borderRadius:"10px",
      }}
    >     
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
              backgroundColor:"#9ca3af94",
            }}
          >
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {users? users.map((item:any)=>{
              //console.log((item.card));
              return(
                <tr 
                  key={item.id}
                  style={{
                    border:"1px dotted #80808059",
                    textAlign:"center"
                  }}
                >
                    <td>
                      <p>{item.id}</p>
                    </td>
                    <td>
                      <p>{item.name}</p>
                    </td>
                </tr>
              )
            }):null}
            {data? data.map((item:any, index:number)=>{
              console.log((item.card));
              return(
                  <div
                    key={index}
                    style={{
                      margin:0,
                      padding:0,
                      width:"400px",
                      height:"400px",
                      boxSizing: "content-box",
                      overflow: "hidden"
                    }}
                  >
                    <KonvaView data={item} setData={setData}/>
                  </div>
                )
              }):null}
          </tbody>
        </table>
    </div>
  );
};
  
export default SelectCard;