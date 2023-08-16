import { CloudUpload } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

import { uploadImage } from "../../../api/admin/apiImage";

function ImageEdit({ item, data, setData, type, setOpen }: any) {
  const {
    handleSubmit,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
    register,
    setValue,
    watch,
  } = useForm({ mode: "onChange" });
  React.useEffect(() => {
    setValue("id", item?.id || "");
    setValue("image", item?.style?.image || "");
    setValue("y", item?.style?.y || 10);
    setValue("x", item?.style?.x || 10);
    setValue("width", item?.style?.width || 120);
    setValue("height", item?.style?.height || 47);
    setValue("cornerRadius", item?.style?.cornerRadius || 0);
    setValue("rotation", item?.style?.rotation || 0);
  }, [item, data, setValue, watch]);
  const buttonType = (values: any) => {
    const image = {
      id: values.id.replace(/\s+/g, "") as string,
      type: "image" as string,
      style: {
        x: values.x as number,
        y: values.y as number,
        draggable: false as boolean,
        image: values.image as string,
        width: values.width as number,
        height: values.height as number,
        cornerRadius: values.cornerRadius as number,
        rotation: values.rotation as number,
      },
      onclick: false as boolean,
    };
    if (type === "edit") {
      const list = data.map((main: any) => {
        if (main.id === item.id) {
          return { ...main, ...image };
        } else {
          return main;
        }
      });
      setData(list);
    }
    if (type === "create") {
      setData([...data, image]);
    }
    setOpen(false);
  };
  const [image, setImage] = React.useState("");
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: any = event.target.files ? event.target.files[0] : null;
    const formData = new FormData();
    formData.append("image", file);
    setImage(URL.createObjectURL(file));
    uploadImage(formData).then((main: any) => {
      setValue("image", main);
    });
  };

  return (
    <div>
      {type === "edit" && (
        <h1 style={{ margin: "10px 0" }}>
          <b>
            <u>Style & Properties</u>
          </b>
        </h1>
      )}
      {type === "create" && <h1>Create Image</h1>}
      <form onSubmit={handleSubmit(buttonType)}>
        <TextField
          label="Column"
          fullWidth
          size="small"
          type="text"
          placeholder="Column: Logo, Background, Icon..."
          sx={{ margin: "5px 0 3px 0" }}
          {...register("id", { required: true })}
          className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
        />

        <TextField
          label="Image"
          fullWidth
          size="small"
          type="text"
          placeholder="Enter your Image"
          sx={{ margin: "5px 0 3px 0" }}
          {...register("image", { required: true })}
          className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
          value={watch("image")}
          onChange={(event) => setValue("image", event.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => document.getElementById("upload")?.click()} size="large">
                  <CloudUpload />
                </IconButton>
                <input
                  id="upload"
                  type="file"
                  accept=".jpg, .png, .gif, .jpeg"
                  style={{ display: "none" }}
                  onChange={handleUpload}
                />
              </InputAdornment>
            ),
          }}
        />
        {image && (
          <img src={image} alt="upload" width="100px" height="100px" style={{ margin: "10px 0" }} />
        )}
        {type === "edit" && (
          <>
            <TextField
              type="number"
              label="X"
              fullWidth
              size="small"
              placeholder="Write your text"
              sx={{ margin: "5px 0 3px 0" }}
              {...register("x", { required: true })}
              className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
            />
            <TextField
              type="number"
              label="Y"
              fullWidth
              size="small"
              placeholder="Write your text"
              sx={{ margin: "5px 0 3px 0" }}
              {...register("y", { required: true })}
              className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
            />
            <TextField
              label="Width"
              fullWidth
              size="small"
              type="number"
              placeholder="Enter your Width"
              sx={{ margin: "5px 0 3px 0" }}
              {...register("width", { required: true })}
              className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
            />

            <TextField
              label="Height"
              fullWidth
              size="small"
              type="number"
              placeholder="Enter your Height"
              sx={{ margin: "5px 0 3px 0" }}
              {...register("height", { required: true })}
              className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
            />

            <TextField
              label="Corner Radius"
              fullWidth
              size="small"
              type="number"
              sx={{ margin: "5px 0 3px 0" }}
              placeholder="Enter your Corner Radius"
              {...register("cornerRadius", { required: true })}
              className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
            />

            <TextField
              label="Rotation"
              fullWidth
              size="small"
              sx={{ margin: "5px 0 3px 0" }}
              type="number"
              placeholder="Enter your Rotation"
              {...register("rotation", { required: true })}
              className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
            />
          </>
        )}
        {type === "create" && (
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="bg-green-700 text-white rounded-md px-4 py-2 hover:bg-green-600 my-2 active:bg-green-900"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="bg-green-700 text-white rounded-md px-4 py-2 hover:bg-green-600 my-2 active:bg-green-900"
        >
          {type === "edit" && <b>Save Change</b>}
          {type === "create" && <b>Create New</b>}
        </button>
        {type === "edit" && (
          <button
            type="button"
            onClick={() => {
              const list = data.filter((main: any) => main.id !== watch("id"));
              setData(list);
            }}
            className="bg-green-700 text-white rounded-md px-4 py-2 hover:bg-green-600 my-2 active:bg-green-900"
          >
            Delete
          </button>
        )}
      </form>
    </div>
  );
}
export default ImageEdit;
