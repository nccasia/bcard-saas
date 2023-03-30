import Link from "next/link";
import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Test from "../admin/Test"


function Card(){

    const [open, setOpen]=React.useState(-1);

    return(
        <div
            style={{
                textAlign:"center",
                paddingTop:"100px",
            }}
        >
            <button
                type="submit"
                style={{margin:"0 8px"}}
                className="bg-gray-400 text-black rounded-md px-2 py-1 hover:bg-gray-50 my-2 active:bg-gray-400 text-base"
                onClick={()=>setOpen(1)}
            >
                Example 1
            </button>
            <button
                type="submit"
                className="bg-gray-400 text-black rounded-md px-2 py-1 hover:bg-gray-50 my-2 active:bg-gray-400 text-base"
                onClick={()=>setOpen(2)}
            >
                Example 2
            </button>
            <Dialog
                open={open!==-1? true: false}
                onClose={()=>setOpen(-1)}       
            >
                <DialogTitle
                    sx={{
                        width:"300px",
                        height:"150px",
                        textAlign:"center",
                    }}
                >
                    <h1>Are you sure?</h1>
                    <Link href={`/users/one/${open}`} >
                        <button
                            className="bg-gray-400 text-white rounded-md px-4 py-2 hover:bg-gray-600 my-2 active:bg-green-900"
                            style={{margin:"0 7px"}}
                        >
                            One
                        </button>
                    </Link>
                    
                    <Link href={`/users/all/${open}`}>
                        <button
                            className="bg-gray-400 text-white rounded-md px-4 py-2 hover:bg-gray-600 my-2 active:bg-green-900"
                        >
                         Excel
                        </button>   
                    </Link>
                </DialogTitle>
            </Dialog>
        </div>
    )
}

export default Card;