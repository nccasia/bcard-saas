import React from 'react'
import { FabricJSCanvas, useFabricJSEditor} from 'fabricjs-react'

function Test() {
  const fabric= useFabricJSEditor();
  const onAddCircle = () => {
    fabric?.editor?.addCircle()
  }
  const onAddRectangle = () => {
    fabric?.editor?.addRectangle()
  }
  return (
    <div>
      <p>hello</p>
      <button onClick={onAddCircle}>Add circle</button>
      <button onClick={onAddRectangle}>Add Rectangle</button>
      <FabricJSCanvas className="sample-canvas" onReady={fabric?.onReady}/>
    </div>
  )
}

export default Test;
