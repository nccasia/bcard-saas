import axios from "axios";

export const getProfile = async () => {
    try{
      const res=await axios({
        url: "/api/profile/getprofile",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      return res.data;
    }catch  (error:any){
      console.log(error)
      return []
    }
};