import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GeneralContextProvider from "./Contexts/GeneralContent.jsx";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <GeneralContextProvider>
    <App />
  </GeneralContextProvider>
);
