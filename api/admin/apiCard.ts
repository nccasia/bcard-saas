import axios from "axios";

export const getCard = async () => {
    try{
      const res=await axios({
        url: "/api/admin/card/cardAll",
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
