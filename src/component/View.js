import React,{useEffect} from 'react'
import { useGlobalContext } from '../Context';
import GridLayout from "react-grid-layout";

export const View = () => {
 
 const layout = JSON.parse(localStorage.getItem('grid-layout'))
 const dropped = JSON.parse(localStorage.getItem('dropped'))
 console.log(dropped);
  
  return (
    <GridLayout
        className="layout p-9"
        // layout={layout}
        cols={6}
        rowHeight={50}
        width={1000}
        compactType={null}
        // autoSize={true}
        margin={[25,25]}
        // onLayoutChange={handleLayoutChange}
      >
     {
      dropped.map((item,index)=>{
        return <div data-grid ={{...layout[index],static:true}} className='bg-red-300' key={item.id}>{item.label}</div>
      })
     }
      </GridLayout>
  )
}
