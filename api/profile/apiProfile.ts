import axios from "axios";
import { toast } from "react-toastify";

export const updateProfile = async (props: any) => {
  try {
    const res = await axios({
      url: "/api/test/createprofile",
      data: JSON.stringify({ data: props }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    toast.success("Success!");
    return res.data;
  } catch (error: any) {
    toast.error(error?.response?.data?.errorMessage);
  }
};

export const getNameCard = async (index: string) => {
  try {
    const res = await axios({
      url: index,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error: any) {
    console.log(error);
    //return [];
  }
};

export const getProfile = async () => {
  try {
    const res = await axios({
      url: "/api/test/getprofile",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error: any) {
    toast.error(error?.response?.data?.errorMessage);
  }
};
export const deleteProfile = async (NameId: string) => {
  try {
    await axios({
      url: "/api/test/deleteprofile/" + NameId,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    toast.success("Success!");
  } catch (error: any) {
    toast.error(error?.response?.data?.errorMessage);
  }
};
