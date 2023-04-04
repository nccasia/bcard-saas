import React from "react";

import ImageEdit from "./ImageEdit";
import TextEdit from "./TextEdit";

function KonvaCreate({ data, setData }: any) {
  const [openText, setOpenText] = React.useState(false);
  const [openImage, setOpenImage] = React.useState(false);

  return (
    <div>
      <h1>Add</h1>
      <button
        className="bg-green-700 text-white rounded-md px-4 py-2 hover:bg-green-600 my-2 active:bg-green-900"
        onClick={() => setOpenText(!openText)}
      >
        Add Text
      </button>
      <button
        className="bg-green-700 text-white rounded-md px-4 py-2 hover:bg-green-600 my-2 active:bg-green-900"
        onClick={() => setOpenImage(!openImage)}
      >
        Add Image
      </button>
      {openText && (
        <TextEdit item={{}} data={data} setData={setData} type="create" setOpen={setOpenText} />
      )}
      {openImage && (
        <ImageEdit item={{}} data={data} setData={setData} type="create" setOpen={setOpenImage} />
      )}
    </div>
  );
}

export default KonvaCreate;
