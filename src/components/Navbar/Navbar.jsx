import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({ name, tag }) {
  return (
    <nav className="navbar">

      <div className="nav-left">
        <h2>{name}</h2>
      </div>

      <div className="nav-center">
        <NavLink to="/about">About</NavLink>

        <NavLink to="/contact">Contact</NavLink>
      </div>

      <div className="nav-right">
        <p>{tag}</p>
      </div>

    </nav>
  );
}

export default Navbar;