import React,{useState,useContext} from "react";
import { BarChart } from './draggedComponents/BarChart'
import { Input } from './draggedComponents/Input'
import { LineChart } from './draggedComponents/LineChart'
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [components, setComponents] = useState([
    { id: 1, label: "Title", component: <Input/> },
    { id: 2, label: "Line Chart", component: "Line Chart" },
    { id: 3, label: "Bar Chart", component: "Bar Chart" },
    { id: 4, label: "Table", component: "Table" },
  ]);
  const [dropped, setDropped] = useState([]);
  return (
    <AppContext.Provider value={{ components, setComponents,dropped,setDropped }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
