import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

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
            <span>Nombre:<br/>{userPrototype.firstName}</span>
            <span>Nombre:<br/>{userPrototype.lastName}</span>
            <span>Nombre:<br/>{userPrototype.age}</span>
            <span>Nombre:<br/>{userPrototype.email}</span>
            <span>Nombre:<br/>{userPrototype.contactNumber}</span>
            <button onClick={()=>this.handleChange()}>Editar</button>
            <Footer/>
        </div>
        )
    }
}

export default Profile;
