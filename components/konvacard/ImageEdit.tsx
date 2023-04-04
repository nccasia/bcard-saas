import React from "react";
import { useForm } from "react-hook-form";

function ImageEdit({item, data, setData, type, setOpen}:any){

    const {
        handleSubmit,
        formState: { errors },
        register,
        setValue,
      } = useForm({mode: "onChange"});

    React.useEffect(() => {
        setValue("id", item?.id || "");
        setValue("image", item?.style?.image || "");
        setValue("width", (item?.style?.width) || 300);
        setValue("height", (item?.style?.height) || 150);
        setValue("cornerRadius", (item?.style?.cornerRadius) || 50);
        setValue("rotation", (item?.style?.rotation) || 0);
    }, [item, data, setValue]);

    const buttonType=(values: any)=>{
        if(type==="edit"){
            const list = data.map((main:any)=>{
                if(main.id=== item.id){
                    return {...main,id:values.id.replace(/\s+/g, ""), onclick:false, style:{...item.style,draggable:false, image:values.image,  width: (values.width), rotation:(values.rotation), height:(values.height), cornerRadius:(values.cornerRadius)}}
                    
                }else{
                    return main;
                }
            });
            setData(list);
        }
        if(type==="create"){
            setData([
                ...data,
                {
                    id: values.id.replace(/\s+/g, ""),
                    type:"image",
                    style:{
                        x: 0,
                        y:0,
                        draggable:false,
                        image: values.image,
                        width: (values.width),
                        height: (values.height),
                        cornerRadius:(values.cornerRadius),
                        rotation:(values.rotation),
                    },
                    onclick:false,
                },
            ]);
        } 
        if(setOpen){
            setOpen(false);
        }   
    }    
    
    return(
        <div>
            {type==="edit" && <h1>Edit Image</h1>}
            {type==="create" && <h1>Create Image</h1>}
            <form onSubmit={handleSubmit(buttonType)}>
                <p>Name:</p>
                <input
                    type="text"
                    placeholder="Enter your name"
                    {...register("id", { required: true })}
                    className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
                />
                
                <p>Image:</p>
                <input
                    type="text"
                    placeholder="Enter your Image"
                    {...register("image", { required: true })}
                    className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
                />

                <p>Width:</p>
                <input
                    type="number"
                    placeholder="Enter your Width"
                    {...register("width", { required: true })}
                    className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
                />

                <p>Height:</p>
                <input
                    type="number"
                    placeholder="Enter your Height"
                    {...register("height", { required: true })}
                    className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
                />

                <p>Corner Radius:</p>
                <input
                    type="number"
                    placeholder="Enter your Corner Radius"
                    {...register("cornerRadius", { required: true })}
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
export default ImageEdit;