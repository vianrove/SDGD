import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer"
import Cookies from "universal-cookie"
import { Link } from "react-router-dom";

const cookies = new Cookies();

const userPrototype = {
    _id:`${cookies.get('_id')}` || 0,
    firstName:`${cookies.get('firstName')}` || 'Nombre placeholder',
    lastName:`${cookies.get('lastName')}` || 'Apellido placeholder',
    age:`${cookies.get('age')}` || 0,
    email:`${cookies.get('email')}` || 'example@mail.com',
    password:`${cookies.get('password')}` || '123456',
    contactNumber:`${cookies.get('contactNumber')}` || 302
}


class Profile extends React.Component{
    handleChange = () =>{
        window.location.href='./edit'
    }
    removeCookies = ()=>{
        console.log(cookies.get('_id'))
        cookies.remove('_id',{path:"/"})
        cookies.remove('firstName',{path:"/"})
        cookies.remove('email',{path:"/"})
        cookies.remove('lastName',{path:"/"})
        cookies.remove('contactNumber',{path:"/"})
        cookies.remove('age',{path:"/"})
        //cookies.remove('compraId',{path:"/"})
        window.location.href="./";
      }
    
    render(){
    if(cookies.get('_id') == undefined){
        window.location.href = './login'
    }else{
        return(
        <div className="profile">
            <Navbar/>
            <div className="flex-wrapper-centered">
                <div className="content-wrapper" style={{textAlign:"center"}}>
                    <img src="./account-settings.svg" className="svg-image-colored" alt="account"/>
                    <br />
                    <span>Nombre: {userPrototype.firstName}</span><br/>
                    <span>Apellido: {userPrototype.lastName}</span><br/>
                    <span>Edad: {userPrototype.age}</span><br/>
                    <span>Email: {userPrototype.email}</span><br/>
                    <span>Teléfono: {userPrototype.contactNumber}</span><br/>
                    <button onClick={()=>this.handleChange()}>Editar</button>
                    <button style={{backgroundColor:"red",color:"white",marginLeft:"20px"}} onClick={()=>this.removeCookies()}>Salir</button>
                </div>
            </div>
            <Footer/>
        </div>
        )
    }
    }
}

export default Profile;
