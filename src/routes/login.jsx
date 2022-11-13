import React from "react"
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios"
import Cookies from "universal-cookie"

class Login extends React.Component {
 //let url = import.meta.env.VITE_URL_LOGIN;
 //url=url+'login';
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
  sesionUser= async ()=>{
    let url = import.meta.env.VITE_URL_LOGIN;
    url=url+'login';
    console.log(url)
    await axios.post(url,{params:{email:this.state.form.email,password:this.state.form.password}})
    .then(response =>console.log(response.data))
    .catch((err)=>console.log(err))
  }
  render(){
    return (
      <div className="inputForms">
        <Navbar/>
        <div className="flex-wrapper-centered">
          <div className="content-wrapper">
            <h1 style={{fontWeight:"400", fontSize: "50px",  textAlign:"center"}}>Bienvenido</h1>
            <form action="" method="post">
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