import React from "react"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class Table extends React.Component{

  render(){
    return (
      <div className="tableConexions">
        <Navbar/>

        <Footer/>        
      </div>
    )
  }
}
export default Table;