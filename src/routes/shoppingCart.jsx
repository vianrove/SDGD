import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Row from "../components/row";
import '../components/styles/ShoppingCart.css'
class ShoppingCart extends React.Component{
  state ={ 
    List:[
      {
        ISBN:0,
        Title:"",
        Price:100,
      }
    ],
    Carrito:{
      UserID:"636058e5530bbc20c01e9c41",
      bag:[
        {
          ISBN:1,
          amount:3,
          Totalprice:300
        }
      ]
    }
  }
  render(){
    return (
      <div className="ShoppingCart">
        <Navbar/>
        <div className="carrito">
        <h2>Bienvenido, Su Carrito: </h2>
        <table>
          <tr>
            <th>Codigo de producto</th>
            <th>Catidad</th>
            <th>Precio</th>
          </tr>
          {this.state.Carrito.bag.map(product =><Row data={product}/>)}
        </table>
        </div>  
        
        <Footer/>
      </div>
    )
  }    
}

export default ShoppingCart;