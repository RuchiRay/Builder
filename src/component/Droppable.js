import React from "react";
import { useDroppable } from "@dnd-kit/core";
import GridLayout from "react-grid-layout";

export const Droppable = ({ dropped }) => {
  console.log(dropped);
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    backgroundColor: isOver ? "green" : undefined,
  };

  const handleLayoutChange = (layout, layouts) => {
    localStorage.setItem("grid-layout", JSON.stringify(layouts));
    console.log(layout);
  };


  return (
    <div className="text-black p-8 min-h-screen" ref={setNodeRef} style={style}>
      
      <GridLayout
        className="layout"
        cols={6}
        rowHeight={50}
        width={1000}
        compactType={null}
        // autoSize={true}
        margin={[25,25]}
        onLayoutChange={handleLayoutChange}
      >
      {dropped
        ? dropped.map((item) => {
            return (
              <div className="bg-white  w-64 h-12 mb-8" key={item.id}>
                {item.label}
              </div>
            );
          })
        : ""}
      </GridLayout>
    </div>
  );
};
