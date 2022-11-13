import "./styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link className="linkText" to="/catalogo">Catalogo</Link>
        <Link className="linkText" to="/shoppingcart">Mis compras</Link>
      </div>
      <div className="center">
        <div className="imgback">
          <Link to={"/"}>
            <img src="/buho.png" alt="buho logo"/>
          </Link>
        </div>
      </div>
      <div className="right">
        <Link className="linkText" to="/profile">Profile</Link>
        <Link className="linkText" to="/salir">Salir</Link>
      </div>
    </div>
  )
}
  
export default Navbar