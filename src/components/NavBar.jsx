import { NavLink } from "react-router-dom";
import Classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={Classes.NavBar}>
      <nav>
        <ul className={Classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? Classes.actif : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projet1"
              className={({ isActive }) => (isActive ? Classes.actif : "")}
            >
              Projet 1
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projet2"
              className={({ isActive }) => (isActive ? Classes.actif : "")}
            >
              Projet 2
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? Classes.actif : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;
