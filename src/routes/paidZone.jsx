import Navbar from "../components/navbar";
import Footer from "../components/footer"
import React from "react";
import '../components/styles/paid.css';
import Cookies from "universal-cookie";
import axios from "axios";

const cookies = new Cookies();

  const PaidProcess = async ()=>{
    e.preventDefault();
    axios.post(url,BODY)
      .then(response =>{console.log(response)})
      .catch((err)=>console.log(err))
  }
  const GetData = async (e)=>{
    
    const url = import.meta.env.VITE_URL_SHOPPINGCART;
    let Data;
    await axios.get(url+`${cookies.get('compraId')}/${cookies.get('_id')}`)
      .then(response =>{
        console.log(response)
        Data = response.data.bag;
      })
      .catch((err)=>console.log(err))
    return Data;
  }

class PaidZone extends React.Component{
  state={
    client:{
      id: cookies.get('_id'),
      shipping: {
          state: "",
          city: "",
          street: "",
          address: ""
      },
      paymentInfo: {
          cardName: "",
          cardNumber: "",
          expDate: "",
          securityCode: ""
      },
    transactionDate: "String",
    items: [],
    totalPrice: 0
    }
  }
  PaidProcess = async (e)=>{
    e.preventDefault();
    let url = import.meta.env.VITE_URL_PASARELA;
    url=url+'payments';
    this.state.client.items = await GetData();
    console.log(this.state)
    await axios.post(url,this.state)
      .then(response =>{
        console.log(response)
        cookies.remove('compraId',{path:"/"})
        window.location.href="./";
      })
      .catch((err)=>console.log(err))
  }

  handleChange = async e =>{ 
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }
  render(){
    return (
      <div>
        <Navbar/>
        <div className="container-paid">
          <h1>Orden #{cookies.get('compraId')}</h1>
          <form onSubmit={this.PaidProcess}>
          <label>Datos de envío y pago</label>
              <label htmlFor="state">Estado</label>
              <input type="text" name="state"  onChange={this.handleChange}/>
              <label htmlFor="city">Ciudad</label>
              <input type="text" name="city"  onChange={this.handleChange}/>
              <label htmlFor="street">Calle</label>
              <input type="text" name="street"  onChange={this.handleChange}/>
              <label htmlFor="address">Direccion</label>
              <input type="text" name="address"  onChange={this.handleChange}/>
          
            <label htmlFor="cardName">nombre de la tarjeta</label>
              <input type="text" name="cardName"  onChange={this.handleChange}/>
              <label htmlFor="cardNumber">numero de tarjeta</label>
              <input type="text" name="cardNumber"  onChange={this.handleChange}/>
              <label htmlFor="expDate">Fecha de expiracion</label>
              <input type="text" name="expDate"  onChange={this.handleChange}/>
              <label htmlFor="securityCode">Codigo de seguridad</label>
              <input type="password" name="securityCode"  onChange={this.handleChange}/>   
              <button id="boton">aceptar</button>
          </form>
        </div>
        <Footer/>
      </div>
    )
  }
    
  }
export default PaidZone;
