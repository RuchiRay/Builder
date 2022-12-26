import React from 'react'
import {useDroppable} from '@dnd-kit/core';
export const Droppable = (props) => {
    const {isOver, setNodeRef} = useDroppable({
        id: 'droppable',
      });
      const style = {
        color: isOver ? 'green' : undefined,
      };
      
      
      return (
        <div className=' min-h-screen' ref={setNodeRef} style={style}>
          {props.children}
        </div>
      );
}
