import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

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