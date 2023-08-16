import { TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

function ShapeEdit({ item, data, setData, type, setOpen }: any) {
  const { handleSubmit, register, setValue, watch } = useForm({ mode: "onChange" });

  React.useEffect(() => {
    setValue("id", item?.id || "");
    setValue("sides", item?.style?.sides || 2);
    setValue("x", item?.style?.x || 30);
    setValue("y", item?.style?.y || 30);
    setValue("width", item?.style?.width || 100);
    setValue("height", item?.style?.height || 100);
    setValue("radius", item?.style?.radius || 30);
    setValue("fill", item?.style?.fill || "red");
    setValue("stroke", item?.style?.stroke || "gray");
    setValue("strokeWidth", item?.style?.strokeWidth || 3);
    setValue("cornerRadius", item?.style?.cornerRadius || 0);
    setValue("rotation", item?.style?.rotation || 0);
  }, [item, data, setValue]);

  const buttonType = (values: any) => {
    const shape = {
      id: values.id.replace(/\s+/g, "") as string,
      type: "shape" as string,
      style: {
        x: values?.x as number,
        y: values?.y as number,
        draggable: false as boolean,
        sides: Number(values.sides) as number,
        width: values?.width as number,
        height: values?.height as number,
        radius: values?.radius as number,
        fill: values?.fill as string,
        stroke: values?.stroke as string,
        strokeWidth: values?.strokeWidth as number,
        rotation: values?.rotation as number,
      },
      onclick: false as boolean,
    };
    if (type === "edit") {
      const list = data.map((main: any) => {
        if (main.id === item.id) {
          return { ...main, ...shape };
        } else {
          return main;
        }
      });
      setData(list);
    }
    if (type === "create") {
      setData([...data, shape]);
    }
    if (setOpen) {
      setOpen("");
    }
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
      {type === "create" && (
        <h1>
          <b>Create Shape</b>
        </h1>
      )}
      <form onSubmit={handleSubmit(buttonType)}>
        <TextField
          label="Column"
          fullWidth
          size="small"
          type="text"
          placeholder="Column: Background1,..."
          sx={{ margin: "5px 0 3px 0" }}
          {...register("id", { required: true })}
          className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
        />

        <TextField
          label="Polygon & Straight Line "
          fullWidth
          size="small"
          type="number"
          placeholder="Number > 1"
          sx={{ margin: "5px 0 3px 0" }}
          className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
          {...register("sides", { required: true, min: 2 })}
        />
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
              label="Width1"
              fullWidth
              size="small"
              type="number"
              placeholder="Enter your Width"
              sx={{ margin: "5px 0 3px 0" }}
              {...register("radius", { required: true })}
              className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
            />
            <TextField
              label="Color"
              fullWidth
              size="small"
              type="text"
              placeholder="Enter your Height"
              sx={{ margin: "5px 0 3px 0" }}
              {...register("fill", { required: true })}
              className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
            />
            <TextField
              label="Color Border"
              fullWidth
              size="small"
              type="text"
              placeholder="Enter your Height"
              sx={{ margin: "5px 0 3px 0" }}
              {...register("stroke", { required: true })}
              className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
            />
            <TextField
              label="Width Border"
              fullWidth
              size="small"
              type="number"
              placeholder="Enter your Height"
              sx={{ margin: "5px 0 3px 0" }}
              {...register("strokeWidth", { required: true })}
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
            onClick={() => setOpen("")}
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

export default ShapeEdit;
