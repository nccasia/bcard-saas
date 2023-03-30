import React from 'react';
import {editTextCard} from "../../utils/konvaCard";
import {useDataDebouncer}  from "../../utils/useDeboune";
import {imgUrl} from "../../utils/imgUrl";

function KonvaView({data, setData}:any){

    const [Konva, setKonva] = React.useState<any>(null);
    React.useEffect(() => {
        import('react-konva').then((konva) => {
            setKonva(konva);
        });
    }, []);
    const handleNodeClick = (e: any) => {
        const nodeId = e.target.attrs.id;
        const list= data.map((main:any)=>{
            if(main.id===nodeId){
                return {...main, onclick:!main.onclick, style:{...main.style, draggable: !main.style?.draggable}}
            }else{
                return {...main, onclick:false, style:{...main.style, draggable: false}}
            }
        })
        setData(list);
    };

    //console.log(data)
    
    return (
        <div
            style={{
                margin:0,
                padding:0
            }}
        >
            {Konva && (
                <Konva.Stage 
                    width={400}
                    height={400}
                    style={{border:"1px dotted gray"}}
                >
                    <Konva.Layer>             
                        {data?data.map((node:any, index:number) => {
                            return (
                                <React.Fragment key={index}>
                                    {node.type==="text" && 
                                        <Konva.Text 
                                            id={node.id}
                                            text={node.style?.text}
                                            fill={node.style?.fill}
                                            width={node.style?.width}
                                            height={node.style?.height}
                                            x={node.style?.x}
                                            y={node.style?.y}
                                            fontSize={node.style?.fontSize}
                                            draggable={node.style?.draggable}
                                            onDragMove
                                            onDragEnd
                                            rotation={node.style?.rotation} 
                                            onClick={handleNodeClick}
                                            onDblClick={(e:any)=>{
                                                editTextCard(e).then((main)=>{
                                                   const newData = [...data];
                                                    newData[index].style.text =main;
                                                    setData(newData);
                                                });  
                                            }}                                    
                                        />
                                    }
                                    {node.type==="image" &&
                                        <Konva.Image
                                            id={node.id}
                                            x={node.style?.x}
                                            y={node.style?.y}
                                            width={node.style?.width}
                                            height={node.style?.height}
                                            image={imgUrl(node.style?.image)}
                                            draggable={node.style?.draggable}
                                            // onDragMove
                                            // onDragEnd
                                            rotation={node.style?.rotation} 
                                            cornerRadius={node.style?.cornerRadius}
                                            onClick={handleNodeClick}
                                        />
                                    }
                                    {node.style?.draggable && (
                                        <Konva.Transformer
                                            id={"transformer"+node.id} 
                                            key={(node.id)}
                                            ref={(item:any) => {
                                                if (item) {
                                                    const transformer = item;
                                                    const stage = item.getStage();
                                                    if (stage) {
                                                        const konvaNode = stage.findOne('#' + node.id);
                                                        transformer.nodes([konvaNode]);
                                                    }
                                                }
                                            }}
                                            //rotateEnabled
                                            onTransformEnd={(e:any) => {
                                                const node1 = e.target;
                                                const newData = [...data];
                                                newData[index].style.width =node1.width() * node1.scaleX();
                                                newData[index].style.height = node1.height() * node1.scaleY();
                                                newData[index].style.rotation = node1.rotation();
                                                setData(newData);
                                                node1.scaleX(1);
                                                node1.scaleY(1);
                                            }}
                                            onDragMove={(e:any) => {                                                
                                                const newData = [...data];
                                                newData[index].style.x =e.target?.attrs?.x;
                                                newData[index].style.y =e.target?.attrs?.y;
                                                //newData[index].style.rotation =e.target?.attrs?.rotation;
                                                setData(newData);
                                            }}
                                        />
                                    )}
                                </React.Fragment>
                            )
                        }):null}
                    </Konva.Layer>
                </Konva.Stage>
            )}
        </div>
    )
}

export default KonvaView 