import React from "react"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class CrearElemento extends React.Component {
  
  state ={
    document:{
      ISBN:0,
      Title:'',
      muestra:0,
      venta:0,
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
    console.log(this.state.form)
  }
  render(){ 
    return (
      <div>
        <Navbar/>
        <div className="flex-wrapper-centered">
          <div className="content-wrapper">
            <h1 style={{fontWeight:"700", fontSize:"50px", textAlign:"center"}}>Registro de documento</h1>
            <form action="" method="post">
              <label htmlFor="Title">Titulo</label>
              <input type="text" name="Title" placeholder="Title" onChange={this.handleChange}/>
              <label htmlFor="muestra">numero de ejemplares</label>
              <input type="number" name="muestra" min="0" onChange={this.handleChange}/>
              <label htmlFor="venta">numero para la venta</label>
              <input type="number" name="venta" min="0"  onChange={this.handleChange}/>
              <label htmlFor="img1">Url de la portada</label>
              <input type="text" name="img1"  onChange={this.handleChange}/>
              <label htmlFor="img2">Url del respando</label>
              <input type="text" name="img2"  onChange={this.handleChange}/>
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