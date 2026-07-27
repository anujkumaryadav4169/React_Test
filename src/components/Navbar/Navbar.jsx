import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({ name, tag }) {
  return (
    <nav className="navbar">
      <div>{name}</div>

      <div>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <div>{tag}</div>
    </nav>
  );
}

export default Navbar;