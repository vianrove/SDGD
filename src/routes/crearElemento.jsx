import React from "react"
import Navbar from "../components/navbar";
import Footer from "../components/footer"
import axios from "axios";
class CrearElemento extends React.Component {
  
  state ={
    document:{
      ISBN:0,
      Title:'',
      muestra:0,
      venta:0,
      precio:0,
      img1:'',
      img2:''
    }
  }

  handleChange = async e =>{
    await this.setState({
      document:{
        ...this.state.document,
        [e.target.name]: e.target.value
      }
    });
  }
  sendData = async (e)=>{
    e.preventDefault();
    let url = import.meta.env.VITE_URL_STORE;
    url=url+'Add';
    //console.log(url)
    await axios.post(url,this.state.document)
    .then(response =>{
      console.log(response.data)
      window.location.href='./inventario'
    })
    .catch((err)=>console.log(err))
  }
  render(){ 
    return (
      <div>
        <Navbar/>
        <div className="flex-wrapper-centered">
          <div className="content-wrapper">
            <h1 style={{fontWeight:"700", fontSize:"50px", textAlign:"center"}}>Registro de documento</h1>
            <form onSubmit={this.sendData}>
              <label htmlFor="Title">Titulo</label>
              <input type="text" name="Title" value={this.state.document.Title} maxlength="50" onChange={this.handleChange}/>
              <label htmlFor="muestra">numero de ejemplares</label>
              <input type="number" name="muestra" value={this.state.document.muestra} min="0" onChange={this.handleChange}/>
              <label htmlFor="venta">numero para la venta</label>
              <input type="number" name="venta" value={this.state.document.venta} min="0"  onChange={this.handleChange}/>
              <label htmlFor="precio">precio de venta</label>
              <input type="number" name="precio" value={this.state.document.precio} min="0"  onChange={this.handleChange}/>
              <label htmlFor="img1">Url de la portada</label>
              <input type="text" name="img1" maxlength="200" value={this.state.document.img1}  onChange={this.handleChange}/>
              <label htmlFor="img2">Url del respaldo</label>
              <input type="text" name="img2" maxlength="200" value={this.state.document.img2} onChange={this.handleChange}/>
              <button id="boton">Registrar</button>
            </form>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
export default CrearElemento;