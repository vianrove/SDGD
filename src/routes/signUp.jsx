import React from "react"
import Navbar from "../components/navbar";
import Footer from "../components/footer"
import axios from "axios";
import Cookies from "universal-cookie"

const cookies = new Cookies();
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
  }

  sesionUser= async (e)=>{
    e.preventDefault();
    let url = import.meta.env.VITE_URL_LOGIN2;
    url=url+'clients';
    await axios.post(url,this.state.form)
    .then(response =>{
      let Data = response.data;
      if(response.message){
        alert('error interno')       
      }else{
        console.log('Registro CORRECTO',Data)
        const {_id,firstName,lastName,email,contactNumber,age} = Data;
        cookies.set('_id',_id,{path:"/"})
        cookies.set('firstName',firstName,{path:"/"})
        cookies.set('lastName',lastName,{path:"/"})
        cookies.set('contactNumber',contactNumber,{path:"/"})
        cookies.set('age',age,{path:"/"})
        cookies.set('email',email,{path:"/"})
        window.location.href="./";
      }
    })
    .catch((err)=>console.log(err))
  }
//.then(response=>{})
  render(){ 
    return (
      <div>
        <Navbar/>
        <div className="flex-wrapper-centered">
          <div className="content-wrapper">
            <h1>Registra tu cuenta</h1>
            <form onSubmit={this.sesionUser}>
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
              <input type="text" name="contactNumber" placeholder="Enter your phone number" onChange={this.handleChange}/>
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