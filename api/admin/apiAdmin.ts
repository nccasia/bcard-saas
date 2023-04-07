/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";

export const addAdmin = async (name: string, email: string) => {
  try {
    const response = await axios({
      url: "/api/admin/admin/adminAll",
      data: JSON.stringify({ name: name, email: email }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getAdmin = async () => {
  try {
    const res = await axios({
      url: "/api/admin/admin/adminAll",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error: any) {
    console.log(error);
    return [];
  }
};

export const deleteAdmin = async (id: number) => {
  try {
    const response = await axios({
      url: "/api/admin/admin/adminAll",
      data: JSON.stringify({ id: id }),
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    console.log(error.message);
  }
};

export const updateAdmin = async (id: number, name: string, email: string) => {
  try {
    const response = await axios({
      url: "/api/admin/admin/adminAll",
      data: JSON.stringify({ id: id, name: name, email: email }),
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    console.log(error.message);
  }
};
