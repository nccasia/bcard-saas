import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { getProfilePage } from "../../api/admin/apiProfile";
import { editProfile, getNameCard, newProfile } from "../../api/admin/apiProfile";

function EditProfile({ value, setOpen, action, setData, setTotal, page }: any) {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  React.useEffect(() => {
    if (value !== "") {
      getNameCard(value).then((main: any) => {
        setValue("NameId", main?.NameId || "");
        setValue("Name", main?.Name || "");
        setValue("Email", main?.Email || "");
        setValue("Phone", main?.Phone || "");
        setValue("Title", main?.Title || "");
        setValue("Mezon", main?.Mezon || "");
        setValue("Zalo", main?.Zalo || "");
        setValue("Telegram", main?.Telegram || "");
        setValue("Whatsapp", main?.Whatsapp || "");
        setValue("Linkedin", main?.Linkedin || "");
      });
    }
  }, [value, setValue]);

  const onFormSubmit = async (index: any) => {
    if (action === "edit") {
      editProfile(index);
      setOpen("");
    }
    if (action === "create") {
      if (index?.Email.endsWith("@ncc.asia")) {
        newProfile(index).then((main: any) => {
          if (main) {
            setOpen("");
            getProfilePage(page).then((main: any) => {
              setData(main?.data);
              setTotal(main?.total);
            });
          }
        });
      } else {
        toast.error("Not an email NCC.");
      }
    }
  };
  const onCancelClick = () => {
    setOpen("");
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h1 className="text-2xl font-semi-bold text-grey-900">
        {action === "edit" && "Edit " + watch("NameId")}
        {action === "create" && "New Card"}
      </h1>
      <hr className="mt-2 mb-3" />
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <p>Name:</p>
        <input
          type="text"
          style={{ outlineColor: errors.Name ? "red" : "none" }}
          placeholder="Enter your name"
          {...register("Name", { required: true })}
          className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
        />
        <p>Email:</p>
        <input
          type="email"
          style={{ outlineColor: errors.Email ? "red" : "none" }}
          placeholder="Enter your email"
          {...register("Email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
          className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
        />
        <p>Phone:</p>
        <input
          type="text"
          placeholder="Enter your phone"
          style={{ outlineColor: errors.Phone ? "red" : "none" }}
          {...register("Phone", {
            required: true,
            // pattern: {
            //   value: /^\s*(\+\d{1,3})?[-. (]*(\d{3})[-. )]*(\d{3})[-.]*(\d{4})(?: *x(\d+))?\s*$/,
            //   message: "Please enter a valid phone number",
            // },
          })}
          className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
        />
        {/* {errors.Phone && <p style={{ color: "red" }}>{errors.Phone.message}</p>} */}
        <p>Title:</p>
        <input
          type="text"
          placeholder="Enter your title"
          style={{ outlineColor: errors.Title ? "red" : "none" }}
          {...register("Title", { required: true })}
          className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
        />
        <p>Mezon:</p>
        <input
          type="text"
          placeholder="Enter Mezon username or link"
          {...register("Mezon")}
          className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
        />
        <p>Zalo:</p>
        <input
          type="text"
          placeholder="Enter Zalo phone or link"
          {...register("Zalo")}
          className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
        />
        <p>Telegram:</p>
        <input
          type="text"
          placeholder="Enter Telegram username, phone, or link"
          {...register("Telegram")}
          className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
        />
        <p>Whatsapp:</p>
        <input
          type="text"
          placeholder="Enter WhatsApp phone or link"
          {...register("Whatsapp")}
          className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
        />
        <p>LinkedIn:</p>
        <input
          type="text"
          placeholder="Enter LinkedIn profile or link"
          {...register("Linkedin")}
          className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
        />
        <div style={{ float: "right", display: "flex", gap: 5, marginTop: "10px" }}>
          <button
            type="button"
            onClick={onCancelClick}
            className="bg-green-700 text-white rounded-md px-4 py-2 hover:bg-green-600 my-2 active:bg-green-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-green-700 text-white rounded-md px-4 py-2 hover:bg-green-600 my-2 active:bg-green-900"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
