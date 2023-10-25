import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router.jsx";
import "./assets/styles/global.css";
import Header from "./UI/Header/Header.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BrowserRouter>
         <Header />
         <div className="main-container">
            <Router />
         </div>
      </BrowserRouter>
   </React.StrictMode>
);
