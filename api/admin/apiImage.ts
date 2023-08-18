import axios from "axios";

export const uploadImage = async (formData: any) => {
  try {
    const res: any = await axios({
      url: "/api/image/upload",
      data: formData,
      method: "POST",
    });
    return res.data;
  } catch (error: any) {
    //return false;
  }
};
