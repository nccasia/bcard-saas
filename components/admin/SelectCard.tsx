import  React from "react"
import { prisma } from "../../lib/prisma";
import {getCard} from "../../api/admin/apiCard";
import styles from "../../styles/admin.module.css"

function SelectCard(): JSX.Element {
  const [users, setUsers]=React.useState<any>([]);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [openEdit, setOpenEdit] = React.useState<number>(-1);
  React.useEffect(()=>{
    getCard().then((data)=>setUsers(data))
  },[]);

  return (
    <div style={{width: "100%"}}>
        <br />
        <h1>Table Card</h1>
        
        <table className={styles.table}>
        <tr className={styles.tr}>
            <th className={styles.th}>ID</th>
            <th className={styles.th}>Card</th>
          </tr>
          {users? users.map((item:any)=>{
            return(
              <tr key={item.id}>
                  <td className={styles.td}>
                    <p>{item.id}</p>
                  </td>
                  <td>
                    <img src={item.card} alt="hello" width="200px" height="200px"/>
                  </td>
              </tr>
            )
          }):null}
        </table>
    </div>
  );
};
  
export default SelectCard;