import { Link } from "react-router-dom"
import React from 'react'
function Navbar(){

    return (
      <div className="navbar">
        <ul>
          <li><Link className="left" to="/">Catalogo</Link></li>
          <li><Link className="left">Mis Compras</Link></li>
          <li><Link className="right" >foto</Link></li>
          <li><Link className="right" >salir</Link></li>
        </ul>
      </div>
    )
  }
export default Navbar;  

