import React from "react";

import { imgUrl } from "../../utils/imgUrl";
import { editTextCard1 } from "../../utils/konvaCard";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useDataDebouncer } from "../../utils/useDeboune";

function KonvaCardView({ data, setData }: any) {
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
  const handleNodeClick = (e: any, index: number) => {
    const newData = [...data];
    if (newData[index]?.style?.text) {
      editTextCard1(e).then((main) => {
        newData[index].style.text = main;
        setData(newData);
      });
    }
    setData(newData);
  };
  console.log(data);

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        border: "1px solid gray",
      }}
    >
      {Konva && (
        <Konva.Stage
          x={0}
          y={0}
          width={350}
          height={200}
          scaleX={stageSize.width < 350 ? stageSize.width / 350 : 1}
          scaleY={stageSize.height < 200 ? stageSize.height / 200 : 1}
        >
          <Konva.Layer width={350} height={200}>
            {data
              ? data.map((node: any, index: number) => {
                  return (
                    <React.Fragment key={index}>
                      {node.type === "text" && (
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
                          rotation={node.style?.rotation}
                          onClick={(e: any) => handleNodeClick(e, index)}
                        />
                      )}
                      {node.type === "image" && (
                        <Konva.Image
                          id={node.id}
                          x={node.style?.x}
                          y={node.style?.y}
                          width={node.style?.width}
                          height={node.style?.height}
                          image={imgUrl(node.style?.image)}
                          draggable={node.style?.draggable}
                          rotation={node.style?.rotation}
                          cornerRadius={node.style?.cornerRadius}
                          onClick={handleNodeClick}
                        />
                      )}
                      {node.type === "rect" && (
                        <Konva.Rect
                          id={node.id}
                          x={node.style?.x}
                          y={node.style?.y}
                          width={node.style?.width}
                          height={node.style?.height}
                          fill={node.style?.fill}
                          stroke={node.style?.stroke}
                          strokeWidth={node.style?.strokeWidth}
                          draggable={node.style?.draggable}
                          rotation={node.style?.rotation}
                          cornerRadius={node.style?.cornerRadius}
                          onClick={handleNodeClick}
                        />
                      )}
                      {node.style?.draggable && (
                        <Konva.Transformer
                          id={"transformer" + node.id}
                          key={node.id}
                          padding={10}
                          ref={(item: any) => {
                            if (item) {
                              const transformer = item;
                              const stage = item.getStage();
                              if (stage) {
                                const konvaNode = stage.findOne("#" + node.id);
                                transformer.nodes([konvaNode]);
                              }
                            }
                          }}
                          //rotateEnabled
                          onTransformEnd={(e: any) => {
                            const node1 = e.target;
                            const newData = [...data];
                            newData[index].style.width = node1.width() * node1.scaleX();
                            newData[index].style.height = node1.height() * node1.scaleY();
                            newData[index].style.rotation = node1.rotation();
                            setData(newData);
                            node1.scaleX(1);
                            node1.scaleY(1);
                          }}
                          onDragMove={(e: any) => {
                            const newData = [...data];
                            newData[index].style.x = e.target?.attrs?.x;
                            newData[index].style.y = e.target?.attrs?.y;
                            //newData[index].style.rotation =e.target?.attrs?.rotation;
                            setData(newData);
                          }}
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

export default KonvaCardView;
