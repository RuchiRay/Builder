import React from 'react'
import {useDroppable} from '@dnd-kit/core';
export const Droppable = (props) => {
  console.log(props);
    const {isOver, setNodeRef} = useDroppable({
        id: 'droppable',
      });
      const style = {
        backgroundColor: isOver ? 'green' : undefined,
      };
      
      
      return (
        <div className='text-black p-8 min-h-screen' ref={setNodeRef} style={style}>
          {props.children}
        </div>
      );
}
