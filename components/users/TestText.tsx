import React from 'react';
import {editTextCard} from "../../utils/konvaCard";
import  KonvaView from "./KonvaView";
import  KonvaEdit from "./KonvaEdit";
import  {updateCard} from "../../api/admin/apiCard";


interface Konva{
    id:string,
    type:string,
    style:any,
    onclick:boolean,
}
  
const TestText = () => {
    
    const [data, setData] = React.useState<Konva[]>([]);
    const addText = () => {
        const newId = data.length + 1;
        setData([
            ...data, 
            {
                id:String(newId),
                type:"text",
                style:{
                    x:50,
                    y:50,
                    text:"hello",
                    fontSize:16,
                    fontFamily:"Calibri",
                    fill:"black",
                    draggable:false,
                    rotation:0,
                },
                onclick:false,
            }
        ]); 
    }
    const handleAddImage = (img:string) => {
        const newId = data.length + 1;
        setData([
            ...data,
            {
                id: String(newId),
                type:"image",
                style:{
                    x: 0,
                    y:0,
                    width: 300,
                    height: 200,
                    draggable:false,
                    cornerRadius:0,
                    image: img,
                    rotate:0,
                },
                onclick:false,
            },
        ]);
    };

    const [input, setInput]=React.useState("");

    console.log(data);
    
    return (
        <div> 
            
            <input
                value={input}
                onChange={(e)=>setInput(e.target.value)} 
                placeholder="Add link..."
            />
            <button 
                onClick={()=>handleAddImage(input)}
            >
                Add Image
            </button>
            <br></br>
            <button onClick={addText}>Add Text</button>
            <br></br>
            <button
                onClick={()=>updateCard({
                    name:"hêlo",
                    card: data,
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAWJaMK1saVYSIBXjItyjHcx2HD8RH09iGJg&usqp=CAU",
                })}
            >
                Save
            </button> 
            <br></br>
            
            <KonvaEdit data={data} setData={setData}/>
            <p>hêlo</p>
            <KonvaView data={data} setData={setData}/>
            
        </div>
    );
};

export default TestText;
