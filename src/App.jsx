import React, { useState } from "react";
import Header from "./components/Header";
import CheckOutForm from "./components/CheckOutForm";
import RecordGroup from "./components/RecordGroup";
import RecordTable from "./components/RecordTable";
import Footer from "./components/Footer";
import Drawer from "./components/Drawer";

const App = () => {
  return (
    <div className="max-w-[700px] px-5 lg:px-0 mx-auto min-h-screen flex flex-col">
      <Header />
      <CheckOutForm />
      <RecordTable />
      <Footer />
      <Drawer />
    </div>
  );
};

export default App;
