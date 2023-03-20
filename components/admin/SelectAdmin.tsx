import  React from "react"
import { prisma } from "../../lib/prisma";
import {addAdmin, getAdmin, deleteAdmin, updateAdmin } from "../../api/admin/apiAdmin";

function SelectAdmin() {
  const [admin, setAdmin]=React.useState<any>([]);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [openEdit, setOpenEdit] = React.useState<number>(-1);
  React.useEffect(()=>{
    getAdmin().then((data)=>setAdmin(data))
  },[]);
  
  return (
    <div>
        <p>Table Admin</p>
        <br></br>
          <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          <br></br>
          <input
              type="text"
              placeholder="Enter your email"
              className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          <br></br>
         <button onClick={()=>{
            addAdmin(name, email);
            setEmail("");
            setName("");
          }}>
          Add</button>
        <br></br>
        <table>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Action</td>
          </tr>
          {admin? admin.map((item:any)=>{
            return(
              <tr key={item.id}>
                  <td>
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
                  <td>
                    <p style={{display: openEdit===item.id?"none":"block"}}>{item.email}</p>
                    <input
                      type="text"
                      placeholder={item.email}
                      className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      style={{display: openEdit===item.id?"block":"none"}}
                    />
                  </td>
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