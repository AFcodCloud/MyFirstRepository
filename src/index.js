import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import MainAPP from "./App";


  ReactDOM.render(
    <MainAPP />,
    document.getElementById("root")
  );

  

serviceWorker.unregister();
