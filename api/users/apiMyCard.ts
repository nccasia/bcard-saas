import axios from "axios";
import { toast } from "react-toastify";

export interface MyCardPayload {
  Name?: string;
  Email?: string;
  Phone?: string;
  Title?: string;
  Address?: string;
  Web?: string;
  Company?: string;
}

export const updateMyCard = async (payload: MyCardPayload) => {
  try {
    const res = await axios({
      url: "/api/card/me",
      data: JSON.stringify(payload),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    toast.success("Update card successfully!");
    return res.data;
  } catch (error: any) {
    toast.error(error?.response?.data?.errorMessage || "Failed to update card");
    return null;
  }
};

