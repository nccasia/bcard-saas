import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from  "../../styles/profile.module.css"
import Image from "next/image";
import  logoncc  from "../../public/logoNCC.png"
import  logo_content  from "../../public/logo_content.png"


function ExcelCard({profile,params}:any){
  console.log(profile)
  // const [isHidden, setIsHidden] =React.useState(true);
  // const toggle = () => setIsHidden(!isHidden);
    return(
      <>
      <div style={{marginBottom: "50px"}}>
        {params?.exampe==="1" &&
          <div
            style={{
              display:"flex",
              justifyContent: "center"
            }}
          >
            <div 
              id="card"
            >
              
             <div className={styles.headCard1}>
               <div className={styles.headContent}>
                 {/* <img src={profile?.logo} alt="hello" className={styles.img2} /> */}
                 <Image src={logoncc} alt="logo" width={100} height={100} className={styles.img2} />
                 <p className={styles.text}>{profile?.company}</p>
                 {/* <p style={{ fontSize: 10 }}>{profile.slogan}</p> */}
               </div>
             </div>
             <br />
             <div className={styles.mainCard1}>
               <div style={{ display: "flex", flex: 1 }}>
                 <div className={styles.cardImage}>
                 <Image src={logo_content} alt="logo" width={150} height={50} className={styles.img3}  />
                  {/* <img src={profile?.img} alt="hello" className={styles.img1} /> */}
                  {/* <p style={{ fontSize: 16, color:"#f1626f" }}>{profile?.company}</p> */}
                  {/* <p style={{ fontSize: 13, color:"gray" }}>{profile?.slogan}</p> */}
                 </div>
               </div>
               <div className={styles.contentCard1}>
                 <div className={styles.title1}>
                     <h1 style={{marginLeft: "16px",fontSize: '20px', color: "#da2325"}}>{profile?.username}</h1>
                     <p style={{marginLeft: "16px", color: "#da2325",fontSize: '16px'}}>{profile?.position}</p>
                 </div>
                 {/* <p>{profile.position}</p> */}
                 <div className={styles.itemContent} style={{marginTop:"15px"}}>
                   <FontAwesomeIcon icon="location-dot" style={{fontSize: '16px', color:"#da2325"}}/>
                   <p style={{fontSize: '16px', lineHeight:1.3}}>{profile?.address}</p>
                 </div>
                 <div className={styles.itemContent}>
                   <FontAwesomeIcon icon="phone" style={{fontSize: '16px', color:"#da2325"}}/>
                   <p style={{fontSize: '16px'}}>{profile?.phone}</p>
                 </div>
                 <div className={styles.itemContent}>
                   <FontAwesomeIcon icon="envelope" style={{fontSize: '16px', color:"#da2325"}}/>
                   <p style={{fontSize: '16px'}}>{profile?.email}</p>
                 </div>
                 <div className={styles.itemContent}>
                <FontAwesomeIcon icon="fire" style={{fontSize: '16px', color:"#da2325"}}/>
                  <p style={{fontSize: '16px'}}>{profile?.web}</p>
                </div>
              </div>
             </div>
          
            </div>
          </div>
        }
        {params?.exampe==="2" && 
           <div id="card">
           
             <div className={styles.headCard}>
               <div className={styles.headContent}>
                 <img src={profile?.logo} alt="hello" className={styles.img} />
                 <p style={{ fontSize: 40 }}>{profile?.company}</p>
               </div>
             </div>
              <br></br>
             <div className={styles.mainCard}>
               <div style={{ display: "flex", flex: 1 }}>
                 <div className={styles.cardImage}>
                   <img src={profile?.img} alt="hello" className={styles.imageCard}/>
                   <p style={{ fontSize: 25 }}>{profile?.company}</p>
                 <p style={{ fontSize: 15, color: "black" }}>{profile?.slogan}</p>
                 </div>
               </div>
               <div className={styles.contentCard}>
                 <div className={styles.title}>
                     <h1 style={{marginLeft: "16px"}}>{profile?.name}</h1>
                     <p style={{marginLeft: "16px", color: "rgb(225 223 217)"}}>{profile?.action}</p>
                 </div>
                
                 {/* <p>{profile.position}</p> */}
                 <div className={styles.itemContent}>
                   <FontAwesomeIcon icon="location-dot" style={{fontSize: '16px'}}/>
                   <p>{profile?.address}</p>
                 </div>
                 <div className={styles.itemContent}>
                   <FontAwesomeIcon icon="phone" style={{fontSize: '16px'}}/>
                   <p>{profile?.phone}</p>
                 </div>
                 <div className={styles.itemContent}>
                   <FontAwesomeIcon icon="envelope" style={{fontSize: '16px'}}/>
                   <p>{profile?.email}</p>
                 </div>
                 <div className={styles.itemContent}>
           <FontAwesomeIcon icon="fire" style={{fontSize: '16px'}}/>
           <p>{profile?.web}</p>
           </div>
               </div>
             </div>
          
           </div>
        }
      </div>
      </>
    )
}
export default ExcelCard;