import Link from "next/link";
import React from "react";

function Card(){

    const [open, setOpen]=React.useState(0);

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
            >
                Example 2
            </button>
            {open!==0 && (
                <div
                    style={{
                        display:"flex"
                    }}
                >
                    <Link href="/users/one/1">One</Link>
                    <p>vs</p>
                    <Link href="/users/all/1">All</Link>
                </div>
            )}
        </div>
    )
}

export default Card;