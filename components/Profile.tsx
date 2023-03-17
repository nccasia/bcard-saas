import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/profile.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Profile({ profile }: any) {
  const [isHidden, setIsHidden] = useState(true);

  const toggle = () => setIsHidden(!isHidden);
  return (
    <div className="text-gray-800 text-lg text-left mt-5">
      <div className="mb-6">
        <Link href={`/profile/edit/${profile.slug}`}>
          <button
            type="submit"
            className="bg-gray-100 text-black rounded-md px-2 py-1 hover:bg-gray-50 my-2 active:bg-gray-400 text-base"
          >
            Update Profile
          </button>
        </Link>
        <br></br>
        <Link href={`/profile/${profile.slug}`}>
          <button
            type="submit"
            className="bg-gray-100 text-black rounded-md px-2 py-1 hover:bg-gray-50 my-2 active:bg-gray-400 text-base"
          >
            Card
          </button>
        </Link>
      </div>
      <button onClick={toggle}>Toggle</button>
      {isHidden ? 
        <div className={styles.cardHead}>
          <div className={styles.cardHeadContent}>
            <img src={profile.logo} alt="hello" className={styles.img}  />
            <p>{profile.slogan}</p>
          </div>
        </div> 
        : 
        <div className={styles.cardMain}>
        <div style={{ display: "flex", flex: 1 }}>
          <div className={styles.cardImage}>
            <img src={profile.logo} alt="hello" className={styles.img} width="100px" height="100px" />
            <p>{profile.slogan}</p>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.itemContent}>
          <FontAwesomeIcon icon="user" style={{fontSize: '12px'}}/>
          <p>{profile.name}</p>
          </div>
          <div className={styles.itemContent}>
          <FontAwesomeIcon icon="phone" style={{fontSize: '12px'}}/>
          <p>{profile.phone}</p>
          </div>
          <div className={styles.itemContent}>
          <FontAwesomeIcon icon="fire" style={{fontSize: '12px'}}/>
          <p>{profile.web}</p>
          </div>
          <div className={styles.itemContent}>
          <FontAwesomeIcon icon="location-dot" style={{fontSize: '12px'}}/>
          <p>{profile.address}</p>
          </div>
        </div>
      </div>
      }
      
      
    </div>
  );
}

export default Profile;
