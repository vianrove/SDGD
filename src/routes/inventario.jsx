import React from "react"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from '../components/cardEdit';
import '../components/styles/Home.css'

class Inventario extends React.Component {

  
  render(){
    return (
    <div className="inventario">
      <Navbar/>
        <div className="Content">
          <p>inventario</p>
          {this.props.products.map( data =><Card data={data}/>)}
        </div>
      <Footer/>
    </div>
      )
    }
    
}
    
export default Inventario;