import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NavBar from "./navbar";
import TopContent from "./topcontent";
import ElementContainer from "./elementContainer";
import Footer from "./footer";

ReactDOM.render(
  <>
    <NavBar />
    <TopContent />
    <ElementContainer />
    <Footer/>
  </>,
  document.getElementById("root")
);
