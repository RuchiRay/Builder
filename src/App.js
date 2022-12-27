import { Layout } from "./component/Layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import { DndContext } from "@dnd-kit/core";
import { Draggable } from "./component/Draggable";
import { Droppable } from "./component/Droppable";
import React, { useState,useEffect } from "react";
import line from "./images/line.png";
import area from "./images/area.png";
import { Sidebar } from "./component/Sidebar";
import { Main } from "./component/Main";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./Context";
import { SelectCompany } from "./component/SelectCompany";
import { SelectData } from "./component/SelectData";

function App() {
  const [activeId, setActiveId] = useState(null);
  const { components, setComponents,dropped,setDropped } = useGlobalContext();

 
 
  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event) {
    setActiveId(null);
    if (event.over !== null) handleDropped(event.active.id);
  }
  const handleDropped = (id) => {
    const ele = components.find((item) => {
      return item.id === id;
    });
    setDropped((prev) => {
      return [...prev, ele];
    });
    const newComponenets = components.filter((item) => {
      return item.id !== id;
    });
    setComponents(newComponenets);
  };
 

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="flex text-cyan-100">
        <Sidebar activeId={activeId} components={components} />
        <div className="bg-cyan-100 w-full ">
          <div className="w-full sticky z-10 shadow-lg top-0 bg-white py-2 px-12 h-20 flex items-center justify-between">
            <div className="flex gap-4">
              <SelectCompany/>
              <SelectData/>
            </div>
            <div className="text-lg">
            <button className="px-8 pt-2 pb-3 bg-cyan-200  rounded-md">
              Save
            </button>
            <Link
              to="view"
              className="px-8 ml-6 pt-[5px] pb-[9px] bg-cyan-100 text-cyan-200 border-2 border-cyan-200  rounded-md"
            >
              View
            </Link>
            </div>
          </div>
          <Droppable  />
        </div>
      </div>
    </DndContext>
  );
}

export default App;
