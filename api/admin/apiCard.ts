import axios from "axios";
import { toast } from "react-toastify";

export const getCardTrue = async () => {
  try {
    const res = await axios({
      url: "/api/test/viewtrue",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    toast.success("Success!");
    return res.data;
  } catch (error: any) {
    toast.error(error?.response?.data?.errorMessage);
    return [];
  }
};

export const getCardAll = async () => {
  try {
    const res = await axios({
      url: "/api/test/viewall",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    //toast.success("Success!");
    return res.data;
  } catch (error: any) {
    toast.error(error?.response?.data?.errorMessage);
    return [];
  }
};

export const updateCard = async (props: any) => {
  try {
    await axios({
      url: "/api/test/create",
      data: JSON.stringify({
        name: props?.name,
        card: props?.card,
        image: props?.image,
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

export const editCard = async (props: any) => {
  try {
    await axios({
      url: "/api/test/edit",
      data: JSON.stringify({
        id: props?.id,
        name: props?.name,
        card: props?.card,
        image: props?.image,
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

export const getKonva = async (index: string) => {
  try {
    const res = await axios({
      url: "/api/test/style/" + index,
      method: "GET",
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

export const deleteCard = async (id: number) => {
  try {
    const res = await axios({
      url: "/api/test/delete/" + String(id),
      method: "DELETE",
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
