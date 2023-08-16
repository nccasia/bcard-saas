import React from "react";

import { imgUrl } from "../../utils/imgUrl";
import { getFontSizeToFit } from "../../utils/lineText";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function KonvaView({ data, setData }: any) {
  const [Konva, setKonva] = React.useState<any>(null);
  const [stageSize, setStageSize] = React.useState<any>({ width: 0, height: 0 });
  React.useEffect(() => {
    import("react-konva").then((konva) => {
      setKonva(konva);
    });
    function handleResize() {
      setStageSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const handleNodeClick = (e: any, index: number) => {
  //   const nodeId = e.target.attrs.id;
  //   const list = data.map((main: any) => {
  //     if (main.id === nodeId) {
  //       return {
  //         ...main,
  //         onclick: !main.onclick,
  //         style: { ...main.style, draggable: !main.style?.draggable },
  //       };
  //     } else {
  //       return { ...main, onclick: false, style: { ...main.style, draggable: false } };
  //     }
  //   });
  //   //console.log(index);
  //   const newData = [...list];
  //   // if (newData[index]?.style?.text) {
  //   //   editTextCard(e).then((main) => {
  //   //     newData[index].style.text = main;
  //   //     setData(newData);
  //   //   });
  //   // }
  //   setData(newData);
  // };

  const scaleLayout = (index: any) => {
    const scale = stageSize.width < 425 ? Number((stageSize.width - 10) * index) / 425 : index;
    return scale;
  };

  //console.log(data);

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        border: "1px solid #80808033",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 5px",
      }}
    >
      {Konva && (
        <Konva.Stage
          width={stageSize.width < 425 ? Number(stageSize.width - 10) : 425}
          height={scaleLayout(250)}
        >
          <Konva.Layer
            width={stageSize.width < 425 ? Number(stageSize.width - 10) : 425}
            height={scaleLayout(250)}
          >
            {data
              ? data.map((node: any, index: number) => {
                  return (
                    <React.Fragment key={index}>
                      {node.type === "text" && (
                        <Konva.Text
                          id={node.id}
                          x={scaleLayout(node.style?.x)}
                          y={scaleLayout(node.style?.y)}
                          width={scaleLayout(node.style?.width)}
                          height={scaleLayout(node.style?.height)}
                          text={node.style?.text}
                          fill={node.style?.fill}
                          fontStyle={node.style?.fontStyle}
                          fontFamily={node.style?.fontFamily}
                          // fontSize={scaleLayout(node.style?.fontSize)}
                          fontSize={scaleLayout(
                            getFontSizeToFit(
                              node.style?.text,
                              node.style?.width,
                              node.style?.fontFamily,
                              Number(node.style?.fontSize),
                              node.style?.oneLine,
                            ),
                          )}
                          draggable={node.style?.draggable}
                          //onClick={(e: any) => handleNodeClick(e, index)}
                          onDblClick={() => {
                            // editTextCard(e).then((main)=>{
                            //    const newData = [...data];
                            //     newData[index].style.text =main;
                            //     setData(newData);
                            // });
                          }}
                        />
                      )}
                      {node.type === "image" && (
                        <Konva.Image
                          id={node.id}
                          x={scaleLayout(node.style?.x)}
                          y={scaleLayout(node.style?.y)}
                          width={scaleLayout(node.style?.width)}
                          height={scaleLayout(node.style?.height)}
                          image={imgUrl(node.style?.image)}
                          draggable={node.style?.draggable}
                          rotation={node.style?.rotation}
                          //cornerRadius={Math.abs(Number(node.style?.cornerRadius))}
                          //onClick={handleNodeClick}
                          perfectDrawEnabled={true}
                          imageSmoothingEnabled={false}
                        />
                      )}
                      {node.type === "shape" && (
                        <Konva.RegularPolygon
                          id={node.id}
                          x={scaleLayout(node.style?.x)}
                          y={scaleLayout(node.style?.y)}
                          width={scaleLayout(node.style?.width)}
                          height={scaleLayout(node.style?.height)}
                          sides={node.style?.sides}
                          radius={scaleLayout(Number(node.style?.radius))}
                          fill={node.style?.fill}
                          stroke={node.style?.stroke}
                          strokeWidth={node.style?.strokeWidth}
                          draggable={node.style?.draggable}
                          rotation={node.style?.rotation}
                          //onClick={handleNodeClick}
                        />
                      )}
                    </React.Fragment>
                  );
                })
              : null}
          </Konva.Layer>
        </Konva.Stage>
      )}
    </div>
  );
}

export default KonvaView;
