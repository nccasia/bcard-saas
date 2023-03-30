import React from 'react'
import  KonvaView from "../../components/konvacard/KonvaView";
import  KonvaEdit from "../../components/konvacard/KonvaEdit";
import  KonvaCreate from "../../components/konvacard/KonvaCreate";

interface Konva{
    id:string,
    type:string,
    style:any,
    onclick:boolean,
}

function CreateCard(){

    const [data, setData] = React.useState<Konva[]>([]);

    return(
        <div>
              <div 
                style={{
                    display:"flex"
                }}
            >
                <div
                
                >
                    <KonvaView data={data} setData={setData}/>
                </div>
                <div>
                    <KonvaCreate data={data} setData={setData}/>
                    <KonvaEdit data={data} setData={setData}/>
                </div>
            </div>
        </div>
    )
}
export default CreateCard;