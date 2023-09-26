import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import StateManagmentProvider from "./components/common/StateProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StateManagmentProvider>
    {" "}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StateManagmentProvider>
);

reportWebVitals();
