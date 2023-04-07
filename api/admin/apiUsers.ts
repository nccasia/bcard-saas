import axios from "axios";

export const getUsers = async () => {
  try {
    const res = await axios({
      url: "/api/admin/users/usersAll",
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
