

function ExcelCard({profile}:any){
    return(
        <div>
            <div id="card">
            <div style={{ width:"300px", height:"150px", backgroundColor:"#ff370096", display: "flex"}}>
              <div style={{ margin: "auto", textAlign: "center", color: "white", fontSize: "14px" }}>
                <img src={profile.logo} alt="hello" style={{ borderRadius: "50%", width: "70px", height: "70px", margin: "0 40px"}} />
                <p>{profile.company}</p>
                <p style={{ fontSize: 12 }}>{profile.slogan}</p>
              </div>
            </div>
            <br></br>
            <div style={{ width: "300px", height: "150px", backgroundColor: "#ff370096", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "white" }}>
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
    )
}
export default ExcelCard;