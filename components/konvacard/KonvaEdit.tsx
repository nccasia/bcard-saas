import React from 'react';
import TextEdit  from "../konvacard/TextEdit";
import ImageEdit  from "../konvacard/ImageEdit"

function KonvaEdit({data, setData}:any){
    

    return(
        <div
            style={{
                margin:0,
                padding:0,
            }}
        >
            <h1>Click to Edit</h1>
            {data?data.map((item:any, index:number) => {
                if(item.onclick){
                    return (
                        <div key={index}>
                            {item.type==="text" && 
                               <TextEdit item={item} data={data} setData={setData} type="edit"/>
                            }

                            {item.type==="image" && 
                               <ImageEdit item={item} data={data} setData={setData} type="edit"/>
                            }
                        </div>
                    )
                }
            }):null}
        </div>
    )
}

export default KonvaEdit;