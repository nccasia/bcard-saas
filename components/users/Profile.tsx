import Link from "next/link";
import React from "react";
import styles from "../styles/profile.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {getProfile} from "../../api/users/apiProfile"
import CreateProfile from "../CreateProfile";
import EditProfile from "../users/EditProfile";
import  ExcelCard from "../../components/users/ExcelCard"

function Profile({params}:any) {
  const [isHidden, setIsHidden] = React.useState(true);
  const toggle = () => setIsHidden(!isHidden);
  const [profile, setProfile]=React.useState<any>([]);
  const [update, setUpdate]=React.useState(false);
  React.useEffect(()=>{
    getProfile().then((data)=>setProfile(data))
  },[]);
console.log(profile)
  return (
    <div 
      style={{
        marginTop:"90px",
      }}
    >
        <Link href="/users/card">Home</Link>
        <br></br>
        {!update && profile && (
          <ExcelCard profile={profile} params={params}/>
        )}
        {!profile && <CreateProfile/>}
        {!update && profile && 
          <button
              type="submit"
              className="bg-gray-400 text-black rounded-md px-2 py-1 hover:bg-gray-600 my-2 active:bg-gray-400 text-base"
              onClick={()=>setUpdate(true)}
            >
            Update Profile
          </button>
        }
        {update && profile &&<EditProfile profile={profile} setUpdate={setUpdate}/>}
    </div>
  );
}

export default Profile;
