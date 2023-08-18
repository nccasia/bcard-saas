import axios from "axios";
import { toast } from "react-toastify";

export const addAdmin = async (email: string) => {
  try {
    const response = await axios({
      url: "/api/admin/new",
      data: JSON.stringify({ email: email }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    toast.success("Success!");
    return response.data;
  } catch (error: any) {
    toast.error(error?.response?.data?.errorMessage);
    return null;
  }
};

export const getAdmin = async () => {
  try {
    const res = await axios({
      url: "/api/admin/view",
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
      url: "/api/admin/delete/" + id,
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

export const updateAdmin = async (id: string, email: string) => {
  try {
    await axios({
      url: "/api/admin/edit",
      data: JSON.stringify({ id: id, email: email }),
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    toast.success("Success!");
    return true;
  } catch (error: any) {
    return null;
    toast.error(error?.response?.data?.errorMessage);
  }
};
