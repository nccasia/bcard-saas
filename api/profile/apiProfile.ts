import axios from "axios";

export const updateProfile = async (props:any) => {
  try {
    const response = await axios({
      url: "/api/test/createprofile",
      data: JSON.stringify({data:props}),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    });
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getNameCard = async (index:string) => {
  try{
    const res=await axios({
      url: index,
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
