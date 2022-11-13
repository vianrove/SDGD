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
      <div className="inputForm">
        <Navbar/>
        <form action="" method="post">
            <label htmlFor="firstName">First name</label><br/>
            <input type="text" name="firstName" placeholder="Enter your first name" onChange={this.handleChange}/>
            <br/>
            <label htmlFor="lastName">Last name</label><br/>
            <input type="text" name="lastName" placeholder="Enter your last name" onChange={this.handleChange}/>
            <br/>
            <label htmlFor="age">your age</label><br/>
            <input type="number" min="10" max="99" name="age" placeholder="Enter your age" onChange={this.handleChange}/>
            <br/>
            <label htmlFor="email">email</label><br/>
            <input type="email" name="email" placeholder="Enter your email" onChange={this.handleChange}/>
            <br/>
            <label htmlFor="password">Password</label><br/>
            <input type="password" name="password" placeholder="Enter your password" onChange={this.handleChange}/>
            <br/>
            <label htmlFor="contactNumber">phone number</label><br/>
            <input type="password" name="contactNumber" placeholder="Enter your phone number" onChange={this.handleChange}/>
            <br/>
            <button id="boton">Sign Up</button>
        </form>
        <Footer/>
        
      </div>
    )
  }
      
}
export default SignUp;