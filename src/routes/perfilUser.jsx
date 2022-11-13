import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const userPrototype = {
    firstName:'',
    lastName:'',
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
            <span>Nombre:<br/>{userPrototype.firstName}</span><br/>
            <span>apellido:<br/>{userPrototype.lastName}</span><br/>
            <span>edad:<br/>{userPrototype.age}</span><br/>
            <span>email:<br/>{userPrototype.email}</span><br/>
            <span>telefono:<br/>{userPrototype.contactNumber}</span><br/>
            <button onClick={()=>this.handleChange()}>Editar</button>
            <Footer/>
        </div>
        )
    }
}

export default Profile;
