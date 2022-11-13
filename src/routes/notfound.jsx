import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Notfound(){
    return (
      <div className="error">
        <Navbar/>
        <div className="flex-wrapper-centered">
          <div className="content-wrapper">
            <h1 style={{textAlign: "center"}}>Página no encontrada</h1>
            <img src="NotFoundWeb.png" alt="not found image"/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }

export default Notfound;