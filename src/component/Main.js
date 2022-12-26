import React from 'react'
import { Droppable } from './Droppable'

export const Main = ({dropped}) => {
  return (
    <div className="min-h-screen">
      <Droppable>{dropped.map((item)=>{
        return <div className='bg-white w-64 h-12 mb-8' key={item.id}>{item.label}</div>
      })
        }</Droppable>
    </div>
  )
}
