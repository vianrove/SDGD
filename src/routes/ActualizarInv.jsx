import React from "react"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class ActualizarInv extends React.Component {
  
  state ={
    document:{
      ISBN:0,
      muestra:0,
      venta:0,
      precio:0
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
    let url ='https://store-api-nodejs-2.herokuapp.com/Add' //import.meta.env.VITE_URL_LOGIN;
    //url=url+'login';
    //console.log(url)
    await axios.put(url,this.state.document)
    .then(response =>console.log(response.data))
    .catch((err)=>console.log(err))
  }

  render(){ 
    return (
      <div>
        <Navbar/>
        <div className="flex-wrapper-centered">
          <div className="content-wrapper">
            <h1 style={{fontWeight:"700", fontSize:"50px", textAlign:"center"}}>Titulo: {this.state.document.Title}</h1>
            <form onSubmit={this.sendData}>
              <label htmlFor="ISBN">Codigo ISBN</label>
              <input type="number" name="ISBN" min="0" value={this.state.document.ISBN} onChange={this.handleChange}/>
              <label htmlFor="muestra">numero de ejemplares</label>
              <input type="number" name="muestra" min="0" value={this.state.document.muestra} onChange={this.handleChange}/>
              <label htmlFor="venta">numero para la venta</label>
              <input type="number" name="venta" min="0" value={this.state.document.venta} onChange={this.handleChange}/>
              <label htmlFor="precio">precio de venta</label>
              <input type="number" name="precio" min="0" value={this.state.document.precio} onChange={this.handleChange}/>
              {/*<label htmlFor="img1">Url de la portada</label>
              <input type="text" name="img1" value={this.state.document.img1} onChange={this.handleChange}/>
              <label htmlFor="img2">Url del respando</label>
    <input type="text" name="img2" value={this.state.document.img2} onChange={this.handleChange}/>*/}
              <button id="boton">actualizar</button>
            </form>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
export default ActualizarInv;