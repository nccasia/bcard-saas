/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";

export const getCard = async () => {
  try {
    const res = await axios({
      url: "/api/admin/card/cardAll",
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

export const updateCard = async (props: any) => {
  try {
    const response = await axios({
      url: "/api/admin/card/cardAll",
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
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getKonva = async (index: string) => {
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
    return [];
  }
};
