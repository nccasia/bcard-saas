import axios from "axios";
import { toast } from "react-toastify";

export const sendEmail = async (index: any) => {
  try {
    const response = await axios({
      url: "/api/email/send",
      data: JSON.stringify(index),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: any) {
    toast.error(error?.response?.data?.errorMessage);
    return null;
  }
};
