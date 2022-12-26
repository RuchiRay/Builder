import { Layout } from "./component/Layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import { DndContext } from "@dnd-kit/core";
import { Draggable } from "./component/Draggable";
import { Droppable } from "./component/Droppable";
import React, { useState } from "react";
import line from "./images/line.png";
import area from "./images/area.png";
import { Sidebar } from "./component/Sidebar";
import { Main } from "./component/Main";
function App() {
  const [activeId, setActiveId] = useState(null);
  const [components, setComponents] = useState([
    { id: 1, label: "Title", component: "input" },
    { id: 2, label: "Line Chart", component: "Line Chart" },
    { id: 3, label: "Bar Chart", component: "Bar Chart" },
    { id: 4, label: "Table", component: "Table" },
  ]);
 const [dropped, setDropped] = useState([])
  function handleDragStart(event) {
    console.log("on drag start");
    setActiveId(event.active.id);
  }

  function handleDragEnd(event) {
    console.log("on drag end",event);
    setActiveId(null);
    if(event.over!==null)
    handleDropped(event.active.id)
  }
  const handleDropped = (id)=>{
    const ele = components.find((item)=>{
      return item.id ===id
    })
   setDropped((prev)=>{
    return [...prev,ele]
   })
   const newComponenets = components.filter((item)=>{
    return item.id!==id;
   })
   setComponents(newComponenets)
  }
  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="flex text-cyan-100">
        <Sidebar  activeId={activeId} components={components} />
        <div className="bg-cyan-100 w-full ">
          <div className="w-full sticky top-0 bg-white py-2 pr-12 h-20 flex items-center justify-end">
            <button className="px-8 pt-3 pb-4 bg-cyan-200 text-xl rounded-md">
              Save
            </button>
          </div>
          <Main dropped={dropped} />
        </div>
      </div>
    </DndContext>
  );
}

export default App;
