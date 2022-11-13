import "./styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
      </div>
      <div className="center">
        <div className="imgback">
          <Link to={"/"}>
            <img src="/buho.png" alt="buho logo"/>
          </Link>
        </div>
      </div>
      <div className="right">
      </div>
    </div>
  )
}
  
export default Navbar