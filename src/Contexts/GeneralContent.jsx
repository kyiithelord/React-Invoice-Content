import React, { createContext, useContext, useState } from "react";

export const GeneralContext = createContext();

function GeneralContextProvider({ children }) {
  const [products, setProduct] = useState([
    { id: 1, name: "Apple", price: 1.99 },
    { id: 2, name: "Banana", price: 0.75 },
    { id: 3, name: "Orange", price: 2.25 },
    { id: 4, name: "Grapes", price: 3.5 },
    // Add more fruits as needed
  ]);

  const addProduct = (newProduct) => {
    setProduct([...products, newProduct]);
  };
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  const [records, setRecord] = useState([]);
  const addRecord = (newRecord) => {
    const isExistedRecord = records.find(
      (record) => record.productId === newRecord.productId
    );
    if (isExistedRecord) {
      updateRecord(isExistedRecord.id, newRecord.quantity);
    } else {
      setRecord([...records, newRecord]);
    }
  };
  const removeRecord = (id) =>
    setRecord(records.filter((record) => record.id != id));
  const updateRecord = (id, addQuantity) => {
    setRecord(
      records.map((record) => {
        if (record.id === id) {
          const newQuantity = record.quantity + addQuantity;
          const newCost = record.price * newQuantity;
          return {
            ...record,
            quantity: newQuantity,
            cost: newCost,
          };
        }
        return record;
      })
    );
  };
  return (
    <GeneralContext.Provider
      value={{
        openDrawer,
        toggleDrawer,
        products,
        addProduct,
        records,
        addRecord,
        removeRecord,
        updateRecord,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
}

export default GeneralContextProvider;
