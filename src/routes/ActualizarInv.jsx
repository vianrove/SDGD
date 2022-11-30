import React, {useState} from "react"
import Navbar from "../components/navbar";
import Footer from "../components/footer"
import { useParams } from "react-router-dom";
import axios from "axios";
const ActualizarInv = (props)=>{
  let { ISBN } = useParams();
  ISBN = parseInt(ISBN);
  let [muestra,setMuestra]=useState(0);
  let [venta,setVenta]=useState(0);
  let [precio,setPrecio]=useState(0);
  let sendData = async (e)=>{
    e.preventDefault();
    muestra=parseInt(muestra)
    venta=parseInt(venta)
    precio=parseInt(precio)
    const data={ISBN,muestra,venta,precio}
    console.log(data)
    let url = import.meta.env.VITE_URL_STORE;
    url=url+'update';
    await axios.put(url,data)
    .then(response =>{
      console.log(response.data)
      window.location.href='/inventario'
    })
    .catch((err)=>console.log(err))
  }
  //const posicion = props.data.find((indice)=>indice.ISBN===ISBN)
  return (
    <div>
      <Navbar/>
      <div className="flex-wrapper-centered">
        <div className="content-wrapper">
          {/*<h1 style={{fontWeight:"700", fontSize:"50px", textAlign:"center"}}>Titulo:{} </h1>*/}
          <form onSubmit={sendData}>
            <label htmlFor="ISBN">Codigo ISBN: {ISBN}</label>
            <label htmlFor="muestra">numero de ejemplares</label>
            <input type="number" name="muestra" min="0" value={muestra} onChange={(e)=>setMuestra(e.target.value)}/>
            <label htmlFor="venta">numero para la venta</label>
            <input type="number" name="venta" min="0" value={venta} onChange={(e)=>setVenta(e.target.value)}/>
            <label htmlFor="precio">precio de venta</label>
            <input type="number" name="precio" min="0" value={precio} onChange={(e)=>setPrecio(e.target.value)}/>
            <button id="boton">actualizar</button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ActualizarInv;