import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer"

function Notfound(){
    return (
      <div className="error">
        <Navbar/>
        <div className="flex-wrapper-centered">
          <div className="content-wrapper">
            <h1 style={{textAlign: "center"}}>Página no encontrada</h1>
            <img style={{width: "350px"}} src="NotFoundWeb.png" alt="not found image"/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }

export default Notfound;