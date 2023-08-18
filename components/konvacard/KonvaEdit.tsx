import React from "react";

import ImageEdit from "./image/ImageEdit";
import ShapeEdit from "./shape/ShapeEdit";
import TextEdit from "./text/TextEdit";

function KonvaEdit({ data, setData, setOpen, type }: any) {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
      }}
    >
      {data
        ? data.map((item: any, index: number) => {
            if (item.onclick) {
              return (
                <div key={index}>
                  {item.type === "text" && type === "text" && (
                    <TextEdit
                      item={item}
                      data={data}
                      setData={setData}
                      type="edit"
                      setOpen={setOpen}
                    />
                  )}
                  {item.type === "image" && type === "image" && (
                    <ImageEdit
                      item={item}
                      data={data}
                      setData={setData}
                      type="edit"
                      setOpen={setOpen}
                    />
                  )}
                  {item.type === "shape" && type === "shape" && (
                    <ShapeEdit
                      item={item}
                      data={data}
                      setData={setData}
                      type="edit"
                      setOpen={setOpen}
                    />
                  )}
                </div>
              );
            }
          })
        : null}
    </div>
  );
}

export default KonvaEdit;
