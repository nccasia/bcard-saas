import React from 'react'
import  KonvaView from "../../components/konvacard/KonvaView";
import  KonvaEdit from "../../components/konvacard/KonvaEdit";
import  KonvaCreate from "../../components/konvacard/KonvaCreate";
import  {updateCard} from "../../api/admin/apiCard"
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
            <button
                onClick={()=>updateCard({
                    name:"hêlo",
                    card: data,
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAWJaMK1saVYSIBXjItyjHcx2HD8RH09iGJg&usqp=CAU",
                })}
            >
                Save SQL
            </button> 
            <div 
                style={{
                    display:"flex"
                }}
            >
                <div>
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