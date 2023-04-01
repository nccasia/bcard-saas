import Link from "next/link";
import React from "react";
import styles from "../styles/profile.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {getProfile} from "../../api/users/apiProfile"
import CreateProfile from "../CreateProfile";
import EditProfile from "../users/EditProfile";
import  ExcelCard from "../../components/users/ExcelCard"
import * as htmlToImage from "html-to-image";
import QRCode from "qrcode-generator";
import Sidebar from "../home/Sidebar";

function Profile({params}:any) {
  const [isHidden, setIsHidden] = React.useState(true);
  const toggle = () => setIsHidden(!isHidden);
  const [profile, setProfile]=React.useState<any>([]);
  const [update, setUpdate]=React.useState(false);
  React.useEffect(()=>{
    getProfile().then((data)=>setProfile(data))
  },[update]);

  const downloadAsPng = async () => {
    const node = document.getElementById("card1");
    if (node) {
      const imgDataUrl = await htmlToImage.toPng(node);
      const link = document.createElement("a");
      link.download = "your-file-name.png";
      link.href = imgDataUrl;
      link.click();
    }
  };

  // console.log(profile)

  return (
    <>
    {/* <Sidebar/> */}
    <div 
      style={{
        marginTop:"50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
        {/* <Link href="/users/card">
          <button
             className="bg-gray-400 text-black rounded-md px-2 py-1 hover:bg-gray-600 my-2 active:bg-gray-400 text-base"
          >
            Home
          </button>
        </Link> */}
        <br />
        {!update && profile && (
          <div id="card1">
            <ExcelCard profile={profile} params={params}/>
          </div>
        )}
        {!profile && <CreateProfile/>}
        {!update && profile && 
          <button
              type="submit"
              style={{margin:"0 8px", width: "200px"}}
              className="bg-gray-400 text-black rounded-md px-2 py-1 hover:bg-gray-600 my-2 active:bg-gray-400 text-base"
              onClick={()=>setUpdate(true)}
            >
            Update Profile
          </button>
        }
        
        {/* <button 
          className="bg-gray-400 text-black rounded-md px-2 py-1 hover:bg-gray-600 my-2 active:bg-gray-400 text-base"
          onClick={downloadAsPng}
        >
          Download
        </button> */}
        {update && profile &&<EditProfile profile={profile} setUpdate={setUpdate}/>}
    </div>
    </>
  );
}

export default Profile;
