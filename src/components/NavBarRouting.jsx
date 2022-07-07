import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./NavBarRouting.css";

function NavBarRouting() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/home" className="logo">
              SER <span>IMPERSONAL</span>
            </Link>
          </li>
          <li>
            <NavLink activeclassname="active" to="/home">
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to="/capacitaciones">
              Capacitaciones
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to="/blog">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to="/nosotros">
              Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to="/contacto">
              Contacto
            </NavLink>
          </li>
          <CartWidget />
        </ul>
      </nav>
    </header>
  );
}

export default NavBarRouting;
