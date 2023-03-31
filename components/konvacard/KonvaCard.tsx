import React from 'react'
import  KonvaView from "../../components/konvacard/KonvaView";
import  KonvaEdit from "../../components/konvacard/KonvaEdit";
import  KonvaCreate from "../../components/konvacard/KonvaCreate";
import  ViewInput from "../../components/konvacard/ViewInput";
import ExcelCard from "../../components/konvacard/ExcelCard";
import  {updateCard} from "../../api/admin/apiCard";
import Grid from '@mui/material/Grid';

function KonvaCard({data, setData, open, setOpen}:any){

    return(
        <div>
            <Grid container>
                <Grid item lg={1}>
                    <ul 
                        style={{
                            border:"1px dotted gray",
                            height:"87vh",
                            width:"100%"
                        }}
                    >         
                        <li>
                            <button
                                onClick={()=>setOpen("view")}
                            >
                                View
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={()=>setOpen("edit")}
                            >
                                Edit
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={()=>setOpen("add")}
                            >
                                Add
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={()=>setOpen("excel")}
                            >
                                Excel
                            </button>
                        </li>
                    </ul>
                </Grid>
                <Grid item lg={3}>
                    <div
                        style={{
                            border:"1px dotted gray",
                            height:"87vh",
                            width:"100%", 
                            padding:"0 20px",
                            position:"static",
                            overflowY:"scroll",
                        }}
                    >
                        {open==="view" && <ViewInput data={data} setData={setData}/>}
                        {open==="add" && <KonvaCreate data={data} setData={setData}/>}
                        {open==="edit" && <KonvaEdit data={data} setData={setData}/>}
                        {open==="excel" && <ExcelCard  data={data} setData={setData}/>}
                    </div>
                </Grid>
                <Grid item lg={8}>
                    <KonvaView data={data} setData={setData}/>
                </Grid>
            </Grid>
        </div>
    )
}
export default KonvaCard;