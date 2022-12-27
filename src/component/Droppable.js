import React from "react";
import { useDroppable } from "@dnd-kit/core";
import GridLayout from "react-grid-layout";
import { useGlobalContext } from "../Context";
export const Droppable = () => {
  const { dropped } = useGlobalContext();
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    backgroundColor: isOver ? "green" : undefined,
  };
  const layout = JSON.parse(localStorage.getItem('grid-layout'))
  const handleLayoutChange = (layout, layouts) => {
    localStorage.setItem("grid-layout", JSON.stringify(layout));
  };

  return (
    <div className="text-black p-8 min-h-screen" ref={setNodeRef} style={style}>
      <GridLayout
        className="layout"
        layout={layout?layout:[]}
        cols={6}
        rowHeight={50}
        width={1000}
        compactType={null}
        // autoSize={true}
        margin={[25, 25]}
        onLayoutChange={handleLayoutChange}
      >
        {dropped
          ? dropped.map((item) => {
              return (
                <div className="bg-white  w-full mb-8" key={item.id}>
                  {item.component}
                </div>
              );
            })
          : ""}
      </GridLayout>
    </div>
  );
};
