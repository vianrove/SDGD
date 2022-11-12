import React,{useEffect, useState} from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";


import Notfound from './pages/notfound.jsx'
import Home from './pages/home.jsx';
import FAQ from "./pages/FAQ.jsx";
import Login from "./pages/login.jsx";
import SignUp from "./pages/signUp.jsx";
import Profile from "./pages/perfilUser.jsx";
import EditProfile from "./pages/editProfile.jsx";

function App() {
  const arr = [
    { ISBN:1, Title:'Calculo vectorial', muestra:200, venta:187, precio:50, img1:'', img2:'' },{ ISBN:2, Title:'Ensayo Academico', muestra:5, venta:0, precio:0, img1:'', img2:'' }]
  const url =`${import.meta.env.VITE_URL_STORE}catalogo`;
  const [todos,setTodos] = useState()
  /*const fetchApi = async ()=>{
    const response = await fetch(url);
    
    console.log(response)
    const responseJson = await response.json()
    console.log(responseJson)
    setTodos(responseJson)
  }*/
  /*useEffect(()=>{
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>setTodos(data))
    .catch((err)=>console.log(err));
    //fetchApi()
  },[])*/

  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home products={arr}/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/singup" element={<SignUp/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/edit" element={<EditProfile/>}/>
        <Route path="/FAQ" element={<FAQ />}/>
        <Route path="*" element={<Notfound />}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App;
