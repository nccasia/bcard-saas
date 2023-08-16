import axios from "axios";
import { toast } from "react-toastify";

export const updateProfile = async (props: any) => {
  try {
    const res = await axios({
      url: "/api/card/createprofile",
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
    return false;
  }
};

export const getNameCard = async (name: string) => {
  try {
    const res = await axios({
      url: "/api/card/" + name,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error: any) {
    toast.error(error?.response?.data?.errorMessage);
    return false;
  }
};

export const getAvatar = async (name: string) => {
  try {
    const res = await axios({
      url: "/api/avatar/" + name,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error: any) {
    toast.error(error?.response?.data?.errorMessage);
    return false;
  }
};

export const getProfile = async () => {
  try {
    const res = await axios({
      url: "/api/card/getprofile",
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
      url: "/api/card/deleteprofile/" + NameId,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    toast.success("Success!");
    return true;
  } catch (error: any) {
    toast.error(error?.response?.data?.errorMessage);
    return false;
  }
};

export const editProfile = async (props: any) => {
  try {
    await axios({
      url: "/api/card/edit",
      data: JSON.stringify({
        NameId: props?.NameId,
        Name: props?.Name,
        Email: props?.Email,
        Phone: props?.Phone,
        Title: props?.Title,
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    toast.success("Success!");
    return true;
  } catch (error: any) {
    toast.error(error?.response?.data?.errorMessage);
    return false;
  }
};

export const newProfile = async (props: any) => {
  try {
    const res: any = await axios({
      url: "/api/card/new",
      data: JSON.stringify({
        Name: props?.Name,
        Email: props?.Email,
        Phone: props?.Phone,
        Title: props?.Title,
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    toast.success("Success!");
    return res.data;
  } catch (error: any) {
    toast.error(error?.response?.data?.errorMessage);
    return false;
  }
};
