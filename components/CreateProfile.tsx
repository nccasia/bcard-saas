import axios from "axios";
import { useForm } from "react-hook-form";

function CreateProfile({ email }) {
  const { handleSubmit, register } = useForm();

  const onFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h1 className="text-2xl font-semi-bold text-grey-900">Create your profile</h1>
      <hr className="mt-2 mb-3" />
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <input
          type="text"
          placeholder="Enter your name"
          {...register("name", { required: true })}
          className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
        />
        <input
          type="email"
          defaultValue={email}
          placeholder="Enter your email"
          disabled
          {...register("email", { required: true })}
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
