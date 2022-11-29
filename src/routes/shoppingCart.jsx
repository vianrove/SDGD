import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer"
import Row from "../components/row";
import Cookies from "universal-cookie";
import '../components/styles/ShoppingCart.css';
import { Link } from "react-router-dom";
const cookies = new Cookies();
const ShoppingCart = ()=>{
  const [arr3, setArr3] = React.useState([])
    React.useEffect(()=>{
      getData();
    },[])

    const getData = async ()=>{
      let url = import.meta.env.VITE_URL_SHOPPINGCART;
      url=url+`${cookies.get('compraId')}/${cookies.get('_id')}`; 
      const response = await fetch(url);    
      const responseJson = await response.json()
      console.log(responseJson)
      setArr3(responseJson.bag)
    }
  

  if(cookies.get('_id')){
    return (
    <div className="ShoppingCart">
      <Navbar/>
      <div className="carrito">
      <h2>Bienvenido {cookies.get('firstName')}, Su Carrito: </h2>
          <table>
            <tr>
              <th>Codigo de producto</th>
              <th>Catidad</th>
              <th>Precio</th>
            </tr>
            {arr3.map(product =><Row key={arr3.ISBN} data={product}/>)}
          </table>
          <Link className="btn-link" to="/paid">Continuar con la compra</Link>
      </div>  
          
      <Footer/>
    </div>
    )
  }else{
    window.location.href = './login';
  }
   
}

export default ShoppingCart;