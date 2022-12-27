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

function App() {
  const [activeId, setActiveId] = useState(null);
  const { arrangement, setArrangement } = useGlobalContext();

  const [components, setComponents] = useState([
    { id: 1, label: "Title", component: "input" },
    { id: 2, label: "Line Chart", component: "Line Chart" },
    { id: 3, label: "Bar Chart", component: "Bar Chart" },
    { id: 4, label: "Table", component: "Table" },
  ]);
  const [dropped, setDropped] = useState([]);
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
  useEffect(() => {
    localStorage.setItem("dropped", JSON.stringify(dropped));
  }, [dropped]);

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="flex text-cyan-100">
        <Sidebar activeId={activeId} components={components} />
        <div className="bg-cyan-100 w-full ">
          <div className="w-full sticky z-10 shadow-lg top-0 bg-white py-2 pr-12 h-20 flex items-center justify-end">
            <button className="px-8 pt-2 pb-3 bg-cyan-200 text-xl rounded-md">
              Save
            </button>
            <Link
              to="view"
              className="px-8 ml-6 pt-[5px] pb-[9px] bg-cyan-100 text-cyan-200 border-2 border-cyan-200 text-xl rounded-md"
            >
              View
            </Link>
          </div>
          <Droppable dropped={dropped} />
        </div>
      </div>
    </DndContext>
  );
}

export default App;
