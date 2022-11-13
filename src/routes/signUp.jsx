import React from "react"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class SignUp extends React.Component {
  
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
            <h1 style={{fontWeight:"700", fontSize:"50px", textAlign:"center"}}>Registra tu cuenta</h1>
            <form action="" method="post">
              <label htmlFor="firstName">Nombre</label>
              <input type="text" name="firstName" placeholder="Enter your first name" onChange={this.handleChange}/>
              <label htmlFor="lastName">Apellido</label>
              <input type="text" name="lastName" placeholder="Enter your last name" onChange={this.handleChange}/>
              <label htmlFor="age">Edad</label>
              <input type="number" min="10" max="99" name="age" placeholder="Enter your age" onChange={this.handleChange}/>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Enter your email" onChange={this.handleChange}/>
              <label htmlFor="password">Contraseña</label>
              <input type="password" name="password" placeholder="Enter your password" onChange={this.handleChange}/>
              <label htmlFor="contactNumber">Teléfono de contacto</label>
              <input type="password" name="contactNumber" placeholder="Enter your phone number" onChange={this.handleChange}/>
              <button id="boton">Registrar</button>
            </form>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
export default SignUp;