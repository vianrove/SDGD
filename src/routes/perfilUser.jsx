import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const userPrototype = {
    firstName:'Nombre placeholder',
    lastName:'Apellido placeholder',
    age:0,
    email:'example@mail.com',
    password:'123456',
    contactNumber:3023026
}

class Profile extends React.Component{
    handleChange = () =>{
        window.location.href='./edit'
    }
    render(){
        return(
        <div className="profile">
            <Navbar/>
            <div className="flex-wrapper-centered">
                <div className="content-wrapper-extended" style={{textAlign:"center"}}>
                    <span>Nombre: {userPrototype.firstName}</span><br/>
                    <span>Apellido: {userPrototype.lastName}</span><br/>
                    <span>Edad: {userPrototype.age}</span><br/>
                    <span>Email: {userPrototype.email}</span><br/>
                    <span>Teléfono: {userPrototype.contactNumber}</span><br/>
                    <button onClick={()=>this.handleChange()}>Editar</button>
                </div>
            </div>
            <Footer/>
        </div>
        )
    }
}

export default Profile;
