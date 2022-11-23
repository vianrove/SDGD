import React from "react"
import Navbar from "../components/navbar";
import Footer from "../components/footer"

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