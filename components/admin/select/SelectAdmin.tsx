import  React, { useState } from "react"
import { prisma } from "../../../lib/prisma";
import {addAdmin, getAdmin, deleteAdmin, updateAdmin } from "../../../api/admin/apiAdmin";
import styles from "../../../styles/admin.module.css"

function SelectAdmin() {
  const [isHidden, setIsHidden] = useState(true);

  const toggle = () => setIsHidden(!isHidden);
  const [admin, setAdmin]=React.useState<any>([]);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [openEdit, setOpenEdit] = React.useState<number>(-1);
  React.useEffect(()=>{
    getAdmin().then((data)=>setAdmin(data))
  },[]);
  
  return (
    <div>
       {isHidden ? null : (
            <div>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
               <button onClick={()=>{
            addAdmin(name, email);
            setEmail("");
            setName("");
          }}>
          Add</button>
            </div>
            
          )}
          <button className={styles.button} onClick={toggle}>Thêm</button>
        
          <h1>Table Admin</h1>
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Email</th>
            <th className={styles.th}>Action</th>
          </tr>
          {admin? admin.map((item:any)=>{
            return(
              <tr key={item.id}>
                  <td  className={styles.td}>
                    <p style={{display: openEdit===item.id?"none":"block"}}>{item.name}</p>
                    <input
                      type="text"
                      placeholder={item.name}
                      className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                      style={{display: openEdit===item.id?"block":"none"}}
                    />
                  </td>
                  <td className={styles.td}>
                    <p style={{display: openEdit===item.id?"none":"block"}}>{item.email}</p>
                    <input
                      type="text"
                      placeholder={item.email}
                      className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      style={{display: openEdit===item.id?"block":"none"}}
                    />
                  </td >
                  <td style={{display:"flex"}}>
                    <button onClick={()=>deleteAdmin(item.id)}>Delete</button>
                    <button 
                      onClick={()=>setOpenEdit(item.id)}
                      style={{display: openEdit===item.id?"none":"block"}}
                    >
                      Edit
                    </button>
                    <button 
                        onClick={()=>{
                            updateAdmin(item.id, name, email);
                            setEmail("");
                            setName("");
                            setOpenEdit(-1);
                        }}
                        style={{display: openEdit===item.id?"block":"none"}}
                      >EDIT
                    </button>
                  </td>
              </tr>
            )
          }):null}
        </table>
    </div>
  );
};
  
export default SelectAdmin;

