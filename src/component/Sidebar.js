import React,{useState} from 'react'
import { Draggable } from './Draggable'
import { DragOverlay} from '@dnd-kit/core';
export const Sidebar = ({activeId,components}) => {
    
     const getComponent = (id)=>{
        const ele = components.find((item)=>{
            return item.id===id
        })
        console.log('seeing ele',ele);
        return ele
     }
  return (
    <div className="w-80 sticky left-0 top-0 shrink-0 bg-cyan-200 h-screen min-h-[616px] p-8">
    <div className="flex items-center">
      <div className="bg-cyan-100 text-cyan-200 text-6xl font-bold px-4 pt-1 pb-2 rounded-lg">
        B
      </div>
      <p className="text-cyan-100 text-4xl ml-4 font-bold">Builder</p>
    </div>
    <div className="mt-12">
      <p className="text-3xl">Components</p>
      <p className="text-sm">Drag these components</p>
    </div>
    <div className="mt-8 flex flex-col">
      {
        components.map((item)=>{
          const {id,label} = item
          return <Draggable    id={id} key={id}> <div className="border cursor-pointer  py-4 mb-6 text-lg rounded-md border-cyan-100" >{label}</div></Draggable>
        })
      }
       <DragOverlay>
        {activeId ? (
         <div className='text-lg text-center rounded-md cursor-pointer py-4 bg-white text-cyan-200 border-2 border-white'>{getComponent(activeId).label}</div>
        ): null}
      </DragOverlay>
    </div>
  
  </div>
  )
}
