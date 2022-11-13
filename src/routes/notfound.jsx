import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Notfound(){
    return (
      <div className="error">
        <Navbar/>
        <img src="NotFoundWeb.png" alt="not found image"/>
        <Footer/>
      </div>
    )
  }

export default Notfound;