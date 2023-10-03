import React from "react"
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import Card from '../components/CardEdit';
import '../components/styles/inventario.css';

const Inventario = (props)=>{

  return (
    <div className="home">
      <Navbar />
      <div className="Content">
        <div className="top">
          <h1>Administrar inventario</h1>
          <Link to={"/create"}><button>Crear</button></Link>
        </div>
        <div className="grid-Content">
          { /*validation()*/ }
          {props.products.map( data =><Card key={data.ISBN} data={data}/>)}

        </div>        
      </div>
      <Footer/>
    </div>
  )
}
    

    
export default Inventario;