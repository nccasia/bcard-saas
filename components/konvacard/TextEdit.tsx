import React from "react";
import { useForm } from "react-hook-form";

interface TypeEdit{
    item:any,
    data:any,
    setData:any,
    type:string,
    setOpen?:any,
}

function TextEdit({item, data, setData, type, setOpen}:TypeEdit){

    const {
        handleSubmit,
        formState: { errors },
        register,
        setValue,
      } = useForm({mode: "onChange",});
    
    React.useEffect(() => {
        setValue("text", item?.style?.text || "");
        setValue("fill", (item?.style?.fill) || "black");
        setValue("fontSize", (item?.style?.fontSize) || 18);
        setValue("fontFamily", (item?.style?.fontFamily) || "time new roman");
        setValue("rotation", (item?.style?.rotation) || 0);
    }, [item, data, setValue]);

    const buttonType=(values: any)=>{
        if(type==="edit"){
            const list = data.map((main:any)=>{
                if(main.id=== item.id){
                    return {...main, style:{...item.style, text:values.text,  fill: values.fill, rotation:(values.rotation), fontSize:(values.fontSize), fontFamily:values.fontFamily}}
                    
                }else{
                    return main;
                }
            });
            setData(list);
        }
        if(type==="create"){
            const newId = data.length + 1;
            setData([
                ...data, 
                {
                    id:String(newId),
                    type:"text",
                    style:{
                        x:50,
                        y:50,
                        draggable:false,
                        text:values.text,
                        fontSize:(values.fontSize),
                        fontFamily:values.fontFamily,
                        fill:values.fill,
                        rotation:(values.rotation),
                    },
                    onclick:false,
                }
            ]); 
        }   
        if(setOpen){
            setOpen(false);
        }     
    }
    
    
    return(
        <div>
            {type==="edit" && <h1>Edit Text</h1>}
            {type==="create" && <h1>Create Text</h1>}
            <form onSubmit={handleSubmit(buttonType)}>
                <p>Text:</p>
                <input
                    type="text"
                    placeholder="Enter your text"
                    {...register("text", { required: true })}
                    className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
                />

                <p>Fill:</p>
                <input
                    type="text"
                    placeholder="Enter your Fill"
                    {...register("fill", { required: true })}
                    className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
                />

                <p>Font Size:</p>
                <input
                    type="number"
                    placeholder="Enter your Font Size"
                    {...register("fontSize", { required: true })}
                    className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
                />

                <p>Font Family:</p>
                <input
                    type="text"
                    placeholder="Enter your Font Family"
                    {...register("fontFamily", { required: true })}
                    className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
                />
               

                <p>Rotation:</p>
                <input
                    type="number"
                    placeholder="Enter your Rotation"
                    {...register("rotation", { required: true })}
                    className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
                />

                <button
                    type="submit"
                    className="bg-green-700 text-white rounded-md px-4 py-2 hover:bg-green-600 my-2 active:bg-green-900"
                    >
                    {type==="edit" && <b>Save Change</b>}
                    {type==="create" && <b>Create New</b>}
                </button>

            </form>
        </div>
    )
}
export default TextEdit;