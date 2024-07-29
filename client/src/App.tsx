//import { useState } from 'react'
import './App.css'
import Board from "./pages/Board.tsx";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <DndProvider backend={HTML5Backend}>
      {/*<div className={"bg-amber-300"}>*/}
      {/*    hi*/}
      {/*</div>*/}
        <Board />
    </DndProvider>
  )
}

export default App
