import "./styles/Navbar.css";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
      <Link to="/shoppingcart"><img src="shopping-cart.svg" className="navIcon" alt="shoppingCart button"/></Link>
      </div>
      <div className="center">
        <div className="imgback">
          <Link to={"/"}>
            <img src="/buho.png" alt="buho logo"/>
          </Link>
        </div>
      </div>
      <div className="right">
        <Link to="/profile"><img src="account-icon.svg" className="navIcon" alt="profile button"/></Link>
        {/*<Link ><img src="SignOutIcon.png" className="imgProfile" alt="profile button"/></Link>*/}
      </div>
    </div>
  )
}
  
export default Navbar;