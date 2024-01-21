import { Link } from "react-router-dom";
import "../css/index.css";
import headerimg from "../images/headerIMG.png";

const Header = () => {
  return (
    <header>
      <section className="section-header">
        <div>
          <img className="header-img" src={headerimg}></img>
        </div>
        <div className="nav-container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/logout">LogOut</Link>
            </li>
          </ul>
        </div>
      </section>
    </header>
  );
};

export default Header;
