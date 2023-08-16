import { Checkbox, MenuItem, TextField, Tooltip } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
interface TypeEdit {
  item: any;
  data: any;
  setData: any;
  type: string;
  setOpen: any;
}

export const NameId = ["Name", "Title", "Email", "Phone", "Web"];
export const fontStyles = ["Normal", "Bold", "Italic", "Italic Bold"];
export const fontFamilys = ["Time New Roman", "Arial", "Calibri"];

function TextEdit({ item, data, setData, type, setOpen }: TypeEdit) {
  const {
    handleSubmit,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
    register,
    setValue,
    watch,
  } = useForm({ mode: "onChange" });
  //console.log(item);
  React.useEffect(() => {
    setValue("id", item?.id || "");
    setValue("text", item?.style?.text || "");
    setValue("x", item?.style?.x || 10);
    setValue("y", item?.style?.y || 10);
    setValue("width", item?.style?.width || 30);
    setValue("height", item?.style?.height || 18);
    setValue("fill", item?.style?.fill || "black");
    setValue("oneLine", item?.style?.oneLine || false);
    setValue("fontSize", item?.style?.fontSize || 18);
    setValue("fontStyle", item?.style?.fontStyle || "Normal");
    setValue("fontFamily", item?.style?.fontFamily || "Time New Roman");
    setValue("rotation", item?.style?.rotation || 0);
  }, [item, data, setValue, setData]);
  //console.log(watch("fontSize"));
  const buttonType = (values: any) => {
    const text = {
      id: values.id.replace(/\s+/g, "") as string,
      type: "text" as string,
      style: {
        x: values?.x as number,
        y: values?.y as number,
        width: values?.width as number,
        height: values?.height as number,
        draggable: false as boolean,
        text: values?.text as string,
        fontSize: values?.fontSize as number,
        oneLine: values?.oneLine as boolean,
        fontFamily: values?.fontFamily as string,
        fontStyle: values?.fontStyle as string,
        fill: values?.fill as string,
        rotation: values.rotation as number,
      },
      onclick: false as boolean,
    };
    if (type === "edit") {
      const list = data.map((main: any) => {
        if (main.id === item.id) {
          return { ...main, ...text };
        } else {
          return main;
        }
      });
      setData(list);
    }
    if (type === "create") {
      setData([...data, text]);
    }
    setOpen(false);
  };
  console.log(data);
  console.log(watch("oneLine"));
  return (
    <div>
      {type === "create" && <h1>Create Text</h1>}
      {type === "edit" && (
        <h1 style={{ margin: "10px 0" }}>
          <b>
            <u>Style & Properties</u>
          </b>
        </h1>
      )}
      <form onSubmit={handleSubmit(buttonType)}>
        <div>
          <TextField
            select
            label="Column"
            fullWidth
            size="small"
            sx={{ margin: "5px 0 3px 0" }}
            {...register("id", { required: true })}
            defaultValue={item?.id || ""}
          >
            {NameId.map((option: string) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            type="text"
            label="Text"
            fullWidth
            size="small"
            placeholder="Write your text"
            sx={{ margin: "5px 0 3px 0" }}
            {...register("text", { required: true })}
          />
          {type === "edit" && (
            <>
              <div style={{ display: "flex", gap: 2 }}>
                <TextField
                  type="number"
                  label="X"
                  fullWidth
                  size="small"
                  placeholder="Write your text"
                  sx={{ margin: "5px 0 3px 0" }}
                  {...register("x", { required: true })}
                />
                <TextField
                  type="number"
                  label="Width"
                  fullWidth
                  size="small"
                  placeholder="Write your text"
                  sx={{ margin: "5px 0 3px 0" }}
                  {...register("width", { required: true })}
                />
              </div>
              <div style={{ display: "flex", gap: 2 }}>
                <TextField
                  type="number"
                  label="Y"
                  fullWidth
                  size="small"
                  placeholder="Write your text"
                  sx={{ margin: "5px 0 3px 0" }}
                  {...register("y", { required: true })}
                />
                <TextField
                  type="number"
                  label="Height"
                  fullWidth
                  size="small"
                  placeholder="Write your text"
                  sx={{ margin: "5px 0 3px 0" }}
                  {...register("height", { required: true })}
                />
              </div>
              <div style={{ display: "flex", gap: 2 }}>
                <TextField
                  type="number"
                  label="Font Size"
                  fullWidth
                  size="small"
                  placeholder="Write your text"
                  sx={{ margin: "5px 0 3px 0" }}
                  {...register("fontSize", { required: true })}
                />
                <Tooltip title="Format one line">
                  <Checkbox
                    checked={watch("oneLine")}
                    onChange={(e: any) => setValue("oneLine", e.target.checked)}
                  />
                </Tooltip>
              </div>
              <TextField
                select
                label="Font Family"
                fullWidth
                size="small"
                sx={{ margin: "5px 0 3px 0" }}
                {...register("fontFamily", { required: true })}
                defaultValue={item?.style?.fontFamily || ""}
              >
                {fontFamilys.map((option: string) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                label="Font Style"
                fullWidth
                size="small"
                sx={{ margin: "5px 0 3px 0" }}
                {...register("fontStyle", { required: true })}
                defaultValue={item?.style?.fontStyle || ""}
              >
                {fontStyles.map((option: string) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                type="text"
                label="Color"
                fullWidth
                size="small"
                placeholder="Write your text"
                sx={{ margin: "5px 0 3px 0" }}
                {...register("fill", { required: true })}
              />
              <TextField
                type="number"
                label="Rotation"
                fullWidth
                size="small"
                placeholder="Write your rotation"
                sx={{ margin: "5px 0 3px 0" }}
                {...register("rotation", { required: true })}
              />
            </>
          )}
        </div>
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
export default TextEdit;
