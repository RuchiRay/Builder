import React,{useState,useContext} from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
 const [arrangement, setArrangement] = useState([])

  return (
    <AppContext.Provider value={{ arrangement, setArrangement }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
