import React, { useEffect, useState } from 'react';
import { Stage, Layer, Text } from 'react-konva';
import Tesseract from 'tesseract.js';
function Test() {
  const [words, setWords] = useState<any>(null);
  const [Konva, setKonva] = React.useState<any>(null);
  React.useEffect(() => {
    import('react-konva').then((konva) => {
        setKonva(konva);
    });
  }, []);
  
  useEffect(() => {
    const image = new Image();
    image.src = "";
    image.onload = () => {
      Tesseract.recognize(image)
        .then((result:any) => {
          const words = result?.words.map((word:any) => ({
            text: word.text,
            x: word.position.x,
            y: word.position.y,
          }));
          setWords(words);
        })
        .catch((error:any) => {
          console.error(error);
        });
    };
  }, []);

  // console.log(Konva)
  console.log(words)

  return (
    <div>
      {/* <Konva.Stage width={400} height={400}>
        <Konva.Layer>
          {words?words.map((word:any, index:any) => (
              <Konva.Text 
                key={index} 
                x={word.x} 
                y={word.y} 
                text={word.text}
              />
          )):null}
        </Konva.Layer>
      </Konva.Stage> */}
    </div>
  );
}

export default Test

