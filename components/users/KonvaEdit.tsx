import React from 'react';

function KonvaEdit({data, setData}:any){

    return(
        <div
            style={{
                margin:0,
                padding:0,
            }}
        >
            {data?data.map((item:any, index:number) => {
                if(item.onclick){
                    return (
                        <div key={index}>
                            {item.type==="text" && 
                                <div>
                                    <p>Edit Text</p>
                                    <p>
                                        Text:
                                        <input value={item.style?.text}/>
                                    </p>
                                    <p>Fill:
                                        <input value={item.style?.fill}/>
                                    </p>  
                                    <p>Font Size:
                                        <input value={item.style?.fontSize}/>
                                    </p>
                                    <p>Font Family:
                                        <input value={item.style?.fontFamily}/>
                                    </p>
                                    <p>Rotation:
                                        <input value={item.style?.rotation}/>
                                    </p>
                                </div>
                            }
                        </div>
                    )
                }
            }):null}
        </div>
    )
}

export default KonvaEdit;