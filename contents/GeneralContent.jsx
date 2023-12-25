import React from "react";
import { createContext } from "react";

export const generalContent = createContext();
const toggleDrawer = () => {
  setOpenDrawer(!openDrawer);
};

const GeneralContentProvider = ({ children }) => {
  return (
    <generalContent.Provider value={{ openDrawer, toggleDrawer }}>
      {children}
    </generalContent.Provider>
  );
};

export default GeneralContentProvider;
