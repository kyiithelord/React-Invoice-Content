import React, { useState } from "react";
import Header from "./components/Header";
import CheckOutForm from "./components/CheckOutForm";
import RecordGroup from "./components/RecordGroup";
import RecordTable from "./components/RecordTable";
import Footer from "./components/Footer";
import Drawer from "./components/Drawer";

const App = () => {
  const [products, setProduct] = useState([
    { id: 1, name: "Apple", price: 1.99 },
    { id: 2, name: "Banana", price: 0.75 },
    { id: 3, name: "Orange", price: 2.25 },
    { id: 4, name: "Grapes", price: 3.5 },
    // Add more fruits as needed
  ]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const addProduct = (newProduct) => {
    setProduct([...products, newProduct]);
  };
  const [records, setRecord] = useState([]);
  const addRecord = (newRecord) => setRecord([...records, newRecord]);
  const removeRecord = (id) =>
    setRecord(records.filter((record) => record.id != id));

  return (
    <div className="max-w-[700px] px-5 lg:px-0 mx-auto min-h-screen flex flex-col">
      <Header />
      <CheckOutForm addRecord={addRecord} products={products} />
      <RecordTable removeRecord={removeRecord} records={records} />
      <Footer handleDrawer={handleDrawer} />
      <Drawer
        products={products}
        handleDrawer={handleDrawer}
        openDrawer={openDrawer}
        addProduct={addProduct}
      />
    </div>
  );
};

export default App;
