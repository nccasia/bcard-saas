import axios, { AxiosRequestConfig } from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

function CreateProfile({ email }: any): JSX.Element {
  const { handleSubmit, register, reset } = useForm();
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const onFormSubmit = async (values: any) => {
    const config: AxiosRequestConfig = {
      url: "/api/createprofile",
      data: JSON.stringify({ email, ...values }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios(config);
      if (response.status === 201) {
        setFeedback(response.data.message);
        setError("");
        reset();
        router.reload();
      } else if (response.status === 401 || response.status === 500) {
        setFeedback("");
        setError(response.data.errorMessage);
      } else {
        setFeedback("");
        setError(response.data.errorMessage);
      }
    } catch (error: any) {
      console.log(error.message);
      setFeedback("");
      setError("An error occurred processing your request.");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h1 className="text-2xl font-semi-bold text-grey-900">Create your profile</h1>
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
        <input
          type="text"
          placeholder="Enter your name"
          {...register("name", { required: true })}
          className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
        />
        <textarea
          rows={4}
          placeholder="Enter your bio"
          {...register("bio", { required: true })}
          className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
        />
        <input
          type="tel"
          placeholder="Enter your phone"
          {...register("phone")}
          className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
        />
        <input
          type="url"
          placeholder="Enter your Twitter Link"
          {...register("twitter")}
          className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
        />
        <input
          type="url"
          placeholder="Enter your Instagram Link"
          {...register("instagram")}
          className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
        />
        <input
          type="url"
          placeholder="Enter your Facebook Link"
          {...register("facebook")}
          className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
        />
        <button
          type="submit"
          className="bg-indigo-700 text-white rounded-md px-4 py-2 hover:bg-indigo-600 my-2 active:bg-indigo-900"
        >
          Create Profile
        </button>
      </form>
    </div>
  );
}

export default CreateProfile;
