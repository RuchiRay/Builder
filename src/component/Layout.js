import React, { useRef, useEffect } from "react";
import GridLayout from "react-grid-layout";
export const Layout = () => {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 0, y: 0, w: 2, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 0, y: 0, w: 1, h: 2 },
  ];

  const handleLayoutChange = (layout, layouts) => {
    localStorage.setItem("grid-layout", JSON.stringify(layouts));
    console.log(layout);
  };

  return (
    <div className="flex">
      <GridLayout
        className="layout w-96"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1500}
        onLayoutChange={handleLayoutChange}
      >
        <div className="bg-blue-300" key="a">
          a
        </div>
        <div className="bg-blue-300" key="b">
          b
        </div>
        <div className="bg-blue-300" key="c">
          c
        </div>
      </GridLayout>
    
    </div>
  );
};
