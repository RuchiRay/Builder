import React,{useState,useContext} from "react";
import { BarChart } from './draggedComponents/BarChart'
import { Input } from './draggedComponents/Input'
import { LineChart } from './draggedComponents/LineChart'
import { Table } from "./draggedComponents/Table";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [components, setComponents] = useState([
    { id: 1, label: "Title", component: <Input/> },
    { id: 2, label: "Line Chart", component: <LineChart/> },
    { id: 3, label: "Bar Chart", component: <BarChart/> },
    { id: 4, label: "Table", component: <Table/> },
  ]);
  const [dropped, setDropped] = useState([]);
  const [title, setTitle] = useState('')
  return (
    <AppContext.Provider value={{ components, setComponents,dropped,setDropped ,title,setTitle}}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
