import axios from "axios";
import { toast } from "react-toastify";

export const addAdmin = async (name: string, email: string) => {
  try {
    const response = await axios({
      url: "/api/admin/admin/postadmin",
      data: JSON.stringify({ name: name, email: email }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    toast.success("Success!");
    return response.data;
  } catch (error: any) {
    toast.error(error?.response?.data?.errorMessage);
  }
};

export const getAdmin = async () => {
  try {
    const res = await axios({
      url: "/api/admin/admin/getadmin",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error: any) {
    toast.error(error?.response?.data?.errorMessage);
    return [];
  }
};

export const deleteAdmin = async (id: string) => {
  try {
    await axios({
      url: "/api/admin/admin/deleteadmin",
      data: JSON.stringify({ id: id }),
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

export const updateAdmin = async (id: string, name: string, email: string) => {
  try {
    await axios({
      url: "/api/admin/admin/putadmin",
      data: JSON.stringify({ id: id, name: name, email: email }),
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    toast.success("Success!");
  } catch (error: any) {
    toast.error(error?.response?.data?.errorMessage);
  }
};
