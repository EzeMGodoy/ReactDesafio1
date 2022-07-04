import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBarRouting.css";

function NavBarRouting() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink activeclassname="active" to="/home">Inicio</NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to="/capacitaciones">Capacitaciones</NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to="/nosotros">Nosotros</NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to="/contacto">Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBarRouting;
