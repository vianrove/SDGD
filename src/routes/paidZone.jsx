import Navbar from "../components/navbar";
import Footer from "../components/footer"
import React from "react";
import '../components/styles/paid.css';
class PaidZone extends React.Component {
  state={
    orden:{
      id:5,
      totalPrice: 2000,
    }
  }
  render(){
    return (
      <div>
        <Navbar/>
      <div className="container-paid">
        <h1>Orden #{this.state.orden.id}</h1>
        <button>efectivo</button>
        <button>tarjeta debito</button>
        <button>tarjeta credito</button>
      </div>
      <Footer/>
      </div>
    )
  }
    
}

export default PaidZone;