import React from "react";
import TextEdit  from "./TextEdit";
import ImageEdit from "./ImageEdit";

function KonvaCreate({data, setData}:any){

    const [openText, setOpenText]=React.useState(false);
    const [openImage, setOpenImage]=React.useState(false);

    return(
        <div>
            <p>Konva Create</p>
            <button 
                onClick={()=>setOpenText(!openText)}
            >
                Add Text
            </button>
            <button 
                onClick={()=>setOpenImage(!openImage)}
            >
                Add Image
            </button>
            {openText && 
                <TextEdit item={{}} data={data} setData={setData} type="create" setOpen={setOpenText}/>
            }
            {openImage && 
                <ImageEdit item={{}} data={data} setData={setData} type="create"/>
            }

        </div>
    )
}

export default KonvaCreate;