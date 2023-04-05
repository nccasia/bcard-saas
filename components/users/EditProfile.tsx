import axios, { AxiosRequestConfig } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

function EditProfile({ profile, setUpdate }: any) {
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");

  const { handleSubmit, register } = useForm({
    mode: "onChange",
    defaultValues: {
      name: profile?.name,
      img: profile?.img,
      email: profile?.email || "",
      web: profile?.web || "",
      address: profile?.address || "",
      company: profile?.company || "",
      position: profile?.position || "",
      logo: profile?.logo || "",
      slogan: profile?.slogan || "",
      phone: profile?.phone || "",
      action: profile?.action || "",
      slug: profile?.slug || "",
    },
  });

  // console.log(profile.slug)
  const onFormSubmit = async (values: any) => {
    const config: AxiosRequestConfig = {
      url: `/api/profile/${profile.slug}`,
      data: JSON.stringify({ ...values }),
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios(config);
      if (response.status === 200) {
        setFeedback(response.data.message);
        setError("");
        setUpdate(false);
      } else if (response.status === 401 || response.status === 500) {
        setFeedback("");
        setError(response.data.errorMessage);
      } else {
        setFeedback("");
        setError(response.data.errorMessage);
      }
    } catch (error: any) {
      setUpdate(false);
      setFeedback("");
      setError("An error occurred processing your request.");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h1 className="text-2xl font-semi-bold text-grey-900">Update your profile</h1>
      <hr className="mt-2 mb-3" />

      {feedback !== "" && error === "" && (
        <div
          className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
          role="alert"
        >
          <span className="font-medium">Success:</span> {feedback}
        </div>
      )}

      {error !== "" && feedback === "" && (
        <div
          className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
          role="alert"
        >
          <span className="font-medium">Error:</span> {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onFormSubmit)}>
        <p>Name:</p>
        <input
          type="text"
          placeholder="Enter your name"
          {...register("name", { required: true })}
          className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
        />
        <p>Image:</p>
        <input
          type="tel"
          placeholder="Enter your Image"
          {...register("img")}
          className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
        />
        <p>Email:</p>
        <input
          type="tel"
          placeholder="Enter your email"
          {...register("email")}
          className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
        />
        <p>Web:</p>
        <input
          type="text"
          placeholder="Enter your web"
          {...register("web")}
          className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
        />
        <p>Contact:</p>
        <input
          type="tel"
          placeholder="Enter your phone"
          {...register("phone")}
          className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
        />
        <p>Position:</p>
        <input
          type="tel"
          placeholder="Enter your position"
          {...register("position")}
          className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
        />
        <p>Company:</p>
        <input
          type="tel"
          placeholder="Enter your company"
          {...register("company")}
          className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
        />
        <p>Logo:</p>
        <input
          type="url"
          placeholder="Enter your logo"
          {...register("logo")}
          className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
        />
        <p>Slogan:</p>
        <input
          type="text"
          placeholder="Enter your slogan"
          {...register("slogan")}
          className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
        />
        <p>Address:</p>
        <input
          type="text"
          placeholder="Enter your address"
          {...register("address")}
          className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
        />
        <p>Action:</p>
        <textarea
          rows={4}
          placeholder="Enter your action"
          {...register("action", { required: true })}
          className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
        />
        <button
          type="submit"
          className="bg-green-700 text-white rounded-md px-4 py-2 hover:bg-green-600 my-2 active:bg-green-900"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
