import Link from "next/link";
import React from "react";
import styles from "../styles/profile.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {getProfile} from "../../api/users/apiProfile"
import CreateProfile from "../CreateProfile";

function Profile() {
  const [isHidden, setIsHidden] = React.useState(true);
  const toggle = () => setIsHidden(!isHidden);
  const [profile, setProfile]=React.useState<any>([]);
  React.useEffect(()=>{
    getProfile().then((data)=>setProfile(data))
  },[]);

  return (
    <div 
      style={{
        display:"flex",
        marginTop:"90px",
      }}
    >
        {profile?
            <div
                style={{
                margin:"auto",
                border:"1px soid gray",
                position:"relative",
                }}
            >
                <img 
                src={profile.img} 
                alt="avatar"
                style={{
                    borderRadius:"50%", 
                    width:"250px", 
                    height: "250px",
                }}
                />
                <div
                style={{
                    position:"absolute",
                    top:170,
                    right:0,
                }}
                >
                <img 
                    src={profile.logo} 
                    alt="logo"
                    style={{
                    borderRadius:"50%", 
                    width:"100px", 
                    height: "100px",    
                    }}
                />
                <p>{profile.slogan}</p>
                </div>
                <p>{profile.name}</p>
                <p>Postion: {profile.position}</p>
                <p>Phone: {profile.phone}</p>
                <p>Company: {profile.company}</p>
                <p>Email: {profile.email}</p>
                <p>Web: {profile.web}</p>
                <p>Address: {profile.address}</p>
                <p>Action: {profile.action}</p>
                <div
                style={{textAlign:"center"}}
                >
                <Link href={`/profile/edit/${profile.slug}`}>
                    <button
                    type="submit"
                    className="bg-gray-400 text-black rounded-md px-2 py-1 hover:bg-gray-600 my-2 active:bg-gray-400 text-base"
                    >
                    Update Profile
                    </button>
                </Link>
                </div>
            </div>
        :
            <CreateProfile/>
        }
    </div>
  );
}

export default Profile;
