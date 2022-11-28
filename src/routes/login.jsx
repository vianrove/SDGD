import React from "react"
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer"
import axios from "axios"
import Cookies from "universal-cookie"

const cookies = new Cookies();

class Login extends React.Component {
  state={
    form:{
      email:'',
      password:''
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
    let url = import.meta.env.VITE_URL_LOGIN;
    url=url+'login';
    await axios.post(url,this.state.form)
    .then(response =>{
      //console.log(response.data)
      if(response.data.message == 'success'){
        console.log('LOGIN CORRECTO',response.data.data)
        const {_id,firstName,lastName,email,contactNumber,age,password} = response.data.data;
        cookies.set('_id',_id,{path:"/"})
        cookies.set('firstName',firstName,{path:"/"})
        cookies.set('lastName',lastName,{path:"/"})
        cookies.set('contactNumber',contactNumber,{path:"/"})
        cookies.set('age',age,{path:"/"})
        cookies.set('email',email,{path:"/"})
        cookies.set('password',password,{path:"/"})
        window.location.href="./";
      }else{
        alert('usuario incorrecto verifique correo o contraseña')
      }
    })
    .catch((err)=>console.log(err))
  }
  render(){
    return (
      <div className="inputForms">
        <Navbar/>
        <div className="flex-wrapper-centered">
          <div className="content-wrapper">
            <h1 style={{fontWeight:"400", fontSize: "50px",  textAlign:"center"}}>Bienvenido</h1>
            <form onSubmit={this.sesionUser}>
              <input type="text" name="email" placeholder="Ingresa tu correo" onChange={this.handleChange}/>
              <br />
              <input type="password" name="password" placeholder="Ingresa tu contraseña" onChange={this.handleChange}/>
              <button id="boton" onClick={()=>this.sesionUser()}>Login</button>
            </form>
            <p><Link to={"/reset-password"}>Olvidé mi contraseña</Link></p>
            <p>No tienes cuenta? <Link to={"/signup"}>crea una</Link></p>
          </div>
        </div>
        <Footer/>                
      </div>
    )
  } 
    
}
export default Login;