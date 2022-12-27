import React from "react";
import { useGlobalContext } from "../Context";
export const Input = () => {
  const { title, setTitle } = useGlobalContext();
  const handleChange = (val)=>{
   setTitle(val)
  }
  return (
    <div className="w-full h-full">
      <input type="text" className="w-full h-full" value={title} onChange={(e)=>handleChange(e.target.value)} placeholder="enter title" />
    </div>
  );
};
