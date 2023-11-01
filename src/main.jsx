import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router.jsx";
import "./assets/styles/global.css";
import Header from "./UI/Header/Header.jsx";
import { BrowserRouter } from "react-router-dom";
import MainConteiner from "./UI/Main-conteiner/MainConteiner.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BrowserRouter basename="/fast-math">
         <Header />
         <MainConteiner>
            <Router />
         </MainConteiner>
      </BrowserRouter>
   </React.StrictMode>
);
