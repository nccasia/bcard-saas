import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from  "../../styles/profile.module.css"
function ExcelCard({profile,params}:any){
    return(
      <div>
        {params?.exampe==="1" &&
          <div
            style={{
              display:"flex"
            }}
          >
            <div 
              id="card"
              style={{
                margin:"auto",
              }}
            >
              <div style={{ width:"300px", height:"150px", backgroundColor:"#161537e8", display: "flex"}}>
                <div style={{ margin: "auto", textAlign: "center", color: "white", fontSize: "14px" }}>
                  <img src={profile.logo} alt="hello" style={{ borderRadius: "50%", width: "70px", height: "70px", margin: "0 40px"}} />
                  <p>{profile.company}</p>
                  <p style={{ fontSize: 12 }}>{profile.slogan}</p>
                </div>
              </div>
              <br></br>
              <div style={{ width: "300px", height: "150px", backgroundColor: "#161537e8", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "white" }}>
                <div style={{ display: "flex", flex: 1 }}>
                  <div style={{ margin: "auto", textAlign: "center", color: "white", width: "100px", height: "100px" }}>
                    <img src={profile.img} alt="hello" style={{ borderRadius: "50%", width: "80px", height: "100px", }} />
                    {/* <p style={{ paddingLeft: "10px" }}>{profile.action}</p> */}
                  </div>
                </div>
                <div style={{ margin: "auto", textAlign: "left", color: "white", flex: 1 }}>
                  <p>{profile.name}</p>
                  <p>{profile.position}</p>
                  <p>{profile.address}</p>
                  <p>{profile.phone}</p>
                  <p>{profile.email}</p>
                  <p>{profile.web}</p>
                </div>
              </div>
            </div>
          </div>
        }
        {params?.exampe==="2" && 
           <div id="card">
           
             <div className={styles.headCard}>
               <div className={styles.headContent}>
                 <img src={profile.logo} alt="hello" className={styles.img} />
                 <p style={{ fontSize: 40 }}>{profile.company}</p>
                 {/* <p style={{ fontSize: 10 }}>{profile.slogan}</p> */}
               </div>
             </div>
            <br></br>
             <div className={styles.mainCard}>
               <div style={{ display: "flex", flex: 1 }}>
                 <div className={styles.cardImage}>
                   <img src={profile.img} alt="hello" className={styles.imageCard}/>
                   <p style={{ fontSize: 25 }}>{profile.company}</p>
                 <p style={{ fontSize: 15, color: "black" }}>{profile.slogan}</p>
                 </div>
               </div>
               <div className={styles.contentCard}>
                 <div className={styles.title}>
                     <h1 style={{marginLeft: "16px"}}>{profile.name}</h1>
                     <p style={{marginLeft: "16px", color: "rgb(225 223 217)"}}>{profile.action}</p>
                 </div>
                
                 {/* <p>{profile.position}</p> */}
                 <div className={styles.itemContent}>
                   <FontAwesomeIcon icon="location-dot" style={{fontSize: '16px'}}/>
                   <p>{profile.address}</p>
                 </div>
                 <div className={styles.itemContent}>
                   <FontAwesomeIcon icon="phone" style={{fontSize: '16px'}}/>
                   <p>{profile.phone}</p>
                 </div>
                 <div className={styles.itemContent}>
                   <FontAwesomeIcon icon="envelope" style={{fontSize: '16px'}}/>
                   <p>{profile.email}</p>
                 </div>
                 <div className={styles.itemContent}>
           <FontAwesomeIcon icon="fire" style={{fontSize: '16px'}}/>
           <p>{profile.web}</p>
           </div>
               </div>
             </div>
          
           </div>
        }
      </div>
    )
}
export default ExcelCard;