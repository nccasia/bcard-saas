import Link from "next/link";
import React from "react";

function Profile({ profile }: any) {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          <Link href={`/profile/${profile.slug}`}>{profile.name}</Link>
        </h1>
        <p>{profile.bio}</p>
        <Link href={`/profile/edit/${profile.slug}`}>
          <button
            type="submit"
            className="bg-gray-100 text-black rounded-md px-2 py-1 hover:bg-gray-50 my-2 active:bg-gray-400 text-base"
          >
            Update Profile
          </button>
        </Link>
        <br />
        <Link href={`/profile/${profile.slug}`}>
          <button
            type="submit"
            className="bg-gray-100 text-black rounded-md px-2 py-1 hover:bg-gray-50 my-2 active:bg-gray-400 text-base"
          >
            Card
          </button>
        </Link>
      </div>

      <br></br>

      <p>Name: {profile.name}</p>
      <p>
        Avatar:
        <img src={profile.img} alt="avatar" />
      </p>
      <p>Position: {profile.position}</p>
      <p>Email: {profile.email}</p>
      <p>Web: {profile.web}</p>
      <p>Phone: {profile.phone}</p>
      <p>Company: {profile.company}</p>
      <p>
        Logo:
        <img src={profile.logo} alt="logo" />
      </p>
      <p>Solan: {profile.solgan}</p>
      <p>Address: {profile.address}</p>
      <p>Action: {profile.action}</p>
      {/* <button onClick={toggle}>Toggle</button>
>>>>>>> 876dcd1401022be41aa7777152f8e81b2e6fecee
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
          <p>{profile.name}</p> <br />
          <p>{profile.bio}</p>
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
<<<<<<< HEAD
      }
      <button className={styles.button} onClick={toggle}>Toggle</button>
=======
<<<<<<<<< Temporary merge branch 1
      }
      <button className={styles.button} onClick={toggle}>Toggle</button>
=========
      } */}
    </div>
  );
}

export default Profile;
