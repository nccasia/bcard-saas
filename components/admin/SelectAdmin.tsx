import  React from "react"
import {addAdmin, getAdmin, deleteAdmin, updateAdmin } from "../../api/admin/apiAdmin";

interface TypeAdmin {
  id:number,
  name:string,
  email:string,
}

function SelectAdmin(): JSX.Element {
  const [admin, setAdmin]=React.useState<TypeAdmin[]>([]);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [nameAdd, setNameAdd] = React.useState("");
  const [emailAdd, setEmailAdd] = React.useState("");
  const [openEdit, setOpenEdit] = React.useState<number>(-1);
  const [openAdd, setOpenAdd] = React.useState<boolean>(false);
  React.useEffect(()=>{
    getAdmin().then((data)=>setAdmin(data))
  },[]);
  
  return (
    <div>
        <br></br>
        <button 
          className="bg-indigo-700 text-white rounded-md px-4 py-2 hover:bg-indigo-600 my-2 active:bg-green-900"
          style={{display: openAdd? "none":"block"}}
          onClick={()=>setOpenAdd(true)}
        >
          Add
          </button>
        <div
          style={{display: openAdd? "block":"none"}}
        >
          <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
              value={nameAdd}
              onChange={(e)=>setNameAdd(e.target.value)}
            />
          <br></br>
          <input
              type="text"
              placeholder="Enter your email"
              className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
              value={emailAdd}
              onChange={(e)=>setEmailAdd(e.target.value)}
            />
          <br></br>
          <button 
            className="bg-indigo-700 text-white rounded-md px-4 py-2 hover:bg-indigo-600 my-2 active:bg-green-900"
            style={{display: openAdd? "block":"none"}}
            onClick={()=>{
              addAdmin(nameAdd, emailAdd).then((data:any)=>setAdmin([...admin,data]));
              setEmailAdd("");
              setNameAdd("");
              setOpenAdd(false)
            }}
          >
          Add
          </button>
        </div>
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
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {admin? admin.map((item:any)=>{
              return(
                <tr 
                  key={item.id}
                  style={{
                    border:"1px dotted gray",
                    textAlign:"center",
                  }}
                >
                    <td>
                      {openEdit!==item.id && item.name}
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
                    <td style={{display:"flex", justifyContent:"center"}}>
                      <button 
                        className="bg-indigo-700 text-white rounded-md px-4 py-2 hover:bg-indigo-600 my-2 active:bg-green-900"
                        onClick={()=>{
                          deleteAdmin(item.id)
                          const list=admin.filter((main:any)=>main.id !==item.id);
                          setAdmin(list);
                        }}
                      >
                        Delete
                      </button>
                      <button 
                        className="bg-indigo-700 text-white rounded-md px-4 py-2 hover:bg-indigo-600 my-2 active:bg-green-900"
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
                              const list=admin.map((main:any)=>{
                                if(main.id===item.id){
                                  return {...main,id:item.id, name:name, email:email}
                                }else{
                                  return main;
                                }
                              })
                              setAdmin(list);
                          }}
                          style={{display: openEdit===item.id?"block":"none"}}
                          className="bg-indigo-700 text-white rounded-md px-4 py-2 hover:bg-indigo-600 my-2 active:bg-green-900"
                        >EDIT
                      </button>
                    </td>
                </tr>
              )
            }):null}
          </tbody>
        </table>
    </div>
  );
};
  
export default SelectAdmin;
