import React from "react";
import { useForm } from "react-hook-form";

function RectEdit({ item, data, setData, type, setOpen }: any) {
  const { handleSubmit, register, setValue } = useForm({ mode: "onChange" });

  React.useEffect(() => {
    if (item) {
      Object.keys(item).map((main: any) => {
        setValue(main, item[main]);
      });
    }
  }, [item, setValue]);

  const buttonType = (values: any) => {
    if (type === "edit") {
      const list = data.map((main: any) => {
        if (main.id === item.id) {
          return {
            ...main,
            id: values.id.replace(/\s+/g, ""),
            onclick: false,
            style: {
              ...item.style,
              draggable: false,
              text: values.text,
              fill: values.fill,
              rotation: values.rotation,
              fontSize: values.fontSize,
              fontFamily: values.fontFamily,
            },
          };
        } else {
          return main;
        }
      });
      setData(list);
    }
    if (type === "create") {
      setData([
        ...data,
        {
          id: "background1",
          type: "rect",
          style: {
            x: 50,
            y: 50,
            draggable: false,
            width: 20,
            height: 100,
            fill: "white",
            rotation: 0,
            stroke: "gray",
            strokeWidth: 1,
          },
          onclick: false,
        },
      ]);
    }
    if (setOpen) {
      setOpen(false);
    }
  };

  return (
    <div>
      {type === "edit" && <h1>Edit Rect</h1>}
      {type === "create" && <h1>Create Rect</h1>}
      <form onSubmit={handleSubmit(buttonType)}>
        {item
          ? Object.keys(item).map((main: any, index: number) => {
              return (
                <div key={index}>
                  <p>{main}</p>
                  <input
                    type="text"
                    placeholder={"Enter your " + main}
                    {...register(main, { required: true })}
                    className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
                  />
                </div>
              );
            })
          : null}
        <button
          type="submit"
          className="bg-green-700 text-white rounded-md px-4 py-2 hover:bg-green-600 my-2 active:bg-green-900"
        >
          {type === "edit" && <b>Save Change</b>}
          {type === "create" && <b>Create New</b>}
        </button>
      </form>
    </div>
  );
}

export default RectEdit;
