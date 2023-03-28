import Link from "next/link";
import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Test from "../admin/Test"
import TestText from "./TestText"

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
                className="bg-gray-100 text-black rounded-md px-2 py-1 hover:bg-gray-50 my-2 active:bg-gray-400 text-base"
                onClick={()=>setOpen(1)}
            >
                Example 1
            </button>
            <button
                type="submit"
                className="bg-gray-100 text-black rounded-md px-2 py-1 hover:bg-gray-50 my-2 active:bg-gray-400 text-base"
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
                        height:"100px",
                        textAlign:"center",
                    }}
                >
                    <p>Are you ready?</p>
                    <Link href={`/users/one/${open}`} >One </Link>
                    vs
                    <Link href={`/users/all/${open}`}>All</Link>
                </DialogTitle>
            </Dialog>
            {/* <Test/> */}
            <TestText/>
        </div>
    )
}

export default Card;