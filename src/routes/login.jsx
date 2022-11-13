import React from "react"
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
        <form action="" method="post">
            <label htmlFor="email">your email address</label><br/>
            <input type="text" name="email" placeholder="Enter your email address" onChange={this.handleChange}/>
            <br/>
            <label htmlFor="password">Password</label><br/>
            <input type="password" name="password" placeholder="Enter your password" onChange={this.handleChange}/>
            <br/>
            <button id="boton" onClick={()=>this.sesionUser()}>Sign Up</button>
        </form>
        <Footer/>                
      </div>
    )
  } 
    
}
export default Login;