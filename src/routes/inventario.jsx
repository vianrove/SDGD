import React from "react"
import Navbar from "../components/navbar";
import Footer from "../components/footer"
import Card from '../components/cardEdit';
import '../components/styles/inventario.css';

const Inventario = (props)=>{

  return (
    <div className="home">
      <Navbar />
      <div className="Content">
        <h1>Administrar inventario</h1>
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