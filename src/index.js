import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
