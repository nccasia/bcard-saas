import  React from "react"
import { prisma } from "../../lib/prisma";
import {getUsers} from "../../api/admin/apiUsers";
import styles from "../../styles/admin.module.css"

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
        <p>Table Users</p>
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th className={styles.th}>Image</th>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Email</th>
          </tr>
          {users? users.map((item:any)=>{
            return(
              <tr key={item.id}>
                  <td className={styles.td}>
                    <img src={item.image} alt="hello" width="50px" height="50px" style={{borderRadius: "50%"}}/>
                  </td>
                  <td className={styles.td}>
                    <p>{item.name}</p>
                  </td>
                  <td className={styles.td}>
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