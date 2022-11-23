import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Cookies from "universal-cookie";
import axios from "axios";
const cookies = new Cookies();
class EditProfile extends React.Component {
  
  state ={
    form:{
      _id:`${cookies.get('_id')}` || 0,
      nombre:`${cookies.get('firstName')}` || 'Nombre placeholder',
      apellido:`${cookies.get('lastName')}` || 'Apellido placeholder',
      age:`${cookies.get('age')}` || 0,
      correo:`${cookies.get('email')}` || 'example@mail.com',
      password:'',
      contactNumber:`${cookies.get('contactNumber')}` || 302
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
  
  sendData = async (e)=>{
    e.preventDefault();
    let url =import.meta.env.VITE_URL_LOGIN;
    url=url+`${this.state.form._id}`;
    console.log(url)
    await axios.put(url,this.state.form)
    .then(response =>{
      console.log(response.data)
      setTimeout(()=>{window.location.href="./";},3000)
    })
    .catch((err)=>console.log(err))
  }

  render(){ 
    return (
      <div>
        <Navbar/>
        <div className="flex-wrapper-centered">
          <div className="content-wrapper">
            <h1 className="reg">Editar cuenta</h1>
            <form onSubmit={this.sendData}>
              <label htmlFor="firstName">Nombre</label>
              <input type="text" name="nombre" placeholder="nombre" value={this.state.form.nombre} onChange={this.handleChange}/>
              <label htmlFor="lastName">Apellido</label>
              <input type="text" name="apellido" value={this.state.form.apellido} placeholder="apellido" onChange={this.handleChange}/>
              <label htmlFor="age">age</label>
              <input type="number" min="10" max="99" name="age" placeholder="edad" value={this.state.form.age} onChange={this.handleChange}/>
              <label htmlFor="password">Contraseña</label>
              <input type="password" name="password" placeholder="Nueva contraseña" onChange={this.handleChange}/>
              <label htmlFor="contactNumber">Teléfono de contacto</label>
              <input type="text" name="contactNumber" value={this.state.form.contactNumber} placeholder="actualizar teléfono" onChange={this.handleChange}/>
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