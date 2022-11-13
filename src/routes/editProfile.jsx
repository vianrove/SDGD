import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
class EditProfile extends React.Component {
  
  state ={
    form:{
      firstName:'',
      lastName:'',
      age:0,
      email:'',
      password:'',
      contactNumber:''
    }
  }

  handleChange = async e =>{
    await this.setState({
      form:{
        ...this.state.form,
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
            <h1 className="reg">Editar cuenta</h1>
            <form action="" method="post">
              <label htmlFor="firstName">Nombre</label>
              <input type="text" name="firstName" placeholder="Nuevo nombre" onChange={this.handleChange}/>
              <label htmlFor="lastName">Apellido</label>
              <input type="text" name="lastName" placeholder="Nuevo apellido" onChange={this.handleChange}/>
              <label htmlFor="password">Contraseña</label>
              <input type="password" name="password" placeholder="Nueva contraseña" onChange={this.handleChange}/>
              <label htmlFor="contactNumber">Teléfono de contacto</label>
              <input type="password" name="contactNumber" placeholder="Nuevo teléfono" onChange={this.handleChange}/>
              <button id="boton">Aplicar cambios</button>
            </form>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
      
}
export default EditProfile;