import React from 'react';
import { useForm } from "react-hook-form";

function ViewInput({data, setData}:any){

    const {
        handleSubmit,
        formState: { errors },
        register,
        setValue,
      } = useForm({mode: "onChange",});

    React.useEffect(() => {
        if(data){
            data.map((item:any)=>{
                setValue((item.id), item.style?.text || item.style?.image || "");
            })
        }
    }, [data, setValue]);

    const buttonSave=(values:any)=>{
        const keys = Object.keys(values);
        let list= [...data];
        for (const key of keys) {
            list=list.map((item:any)=>{
                if(item.id===key){
                    if(item.style?.text){
                        return {...item, style:{...item.style, text:values[key]}}
                    };
                    if(item.style?.image){
                        return {...item, style:{...item.style, image:values[key]}}
                    }        
                }else{
                    return item;
                }
            })
            
        }
        setData(list);
    }

    return(
        <div>
            <p>hêlo</p>
            <form onSubmit={handleSubmit(buttonSave)}>
                {data?data.map((item:any, index:number)=>{
                    return(
                        <div key={index}>
                            <p>{item.id}</p>
                            <input
                                type="text"
                                placeholder={"Enter your " +(item.id)}
                                {...register((item.id), { required: true })}
                                className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
                            />
                        </div>
                    )
                }):null}
                <button
                    type="submit"
                    className="bg-green-700 text-white rounded-md px-4 py-2 hover:bg-green-600 my-2 active:bg-green-900"
                    >
                    Save Change
                </button>
            </form>
        </div>
    )
}

export default ViewInput;