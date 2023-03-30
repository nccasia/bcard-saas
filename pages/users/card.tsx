import LayoutUser  from "../../components/home/LayoutUser";
import React, { useState } from 'react';
import Card from "../../components/users/Card"
import  {getCard} from "../../api/admin/apiCard";
import {imgUrl} from "../../utils/imgUrl";
import Link from 'next/link';

function CardPage() {

    const [card, setCard]=React.useState<any>([])
    React.useEffect(()=>{
        getCard().then((main)=>setCard(main))
    },[]);

    return (
        <div>
            <LayoutUser>
                <Card/>
                {/* <br></br>
                <p>...Test</p>
                <div
                    style={{
                        display:"flex",
                    }}
                >
                    {card? card.map((item:any, index:number)=>{
                        return(
                            <div 
                                key={index}
                                style={{
                                    border:"1px dotted gray",
                                    borderRadius:"10px",
                                    width:"250px",
                                    height:"250px",
                                    margin:"0 10px"
                                }}
                            >
                                <img 
                                    src={item.image} 
                                    alt="card"
                                    style={{
                                        width:"250px",
                                        height:"200px",
                                        borderRadius:"10px 10px 0 0"
                                    }}
                                />
                                <Link href={`/card/${item.id}`}>{item.name}</Link>
                            </div>
                        )
                    }):null}
                </div> */}
            </LayoutUser>   
        </div>
    );
}

export default CardPage;