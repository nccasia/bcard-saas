import LayoutUser from "../../components/home/LayoutUser";
import React, { useState } from 'react';
import  {getCard} from "../../api/admin/apiCard"


function Id({params}:any) {

    const [data, setData]=React.useState<any[]>([]);

    React.useEffect(()=>{
        getCard().then((main)=>{        
        })
    },[]);
    
    return(
        <div>
            <LayoutUser>
                <p>hêlo</p>
            </LayoutUser>   
        </div>
    )
}

export default Id;

export async function getStaticProps({ params }:any) {
    return {
        props: {params}
    }

}

export const getStaticPaths = () => {
    return {
      paths: [],
      fallback: true,
    };
  };
  