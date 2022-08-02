import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  const categories = [
    { id: "todos", address: "/", text: "TODOS LOS PRODUCTOS" },
    {
      id: "capacitaciones",
      address: "/category/capacitaciones",
      text: "Capacitaciones",
    },
    { id: "cursos", address: "/category/cursos", text: "Cursos" },
    { id: "online", address: "/category/online", text: "Online" },
  ];
  return (
    <section className="NavBarCategories">
      {categories.map((cat) => {
        return (
          <NavLink
            to={cat.address}
            className={({ isActive }) => (isActive ? "activeClass" : "Links")}
            key={cat.id}
          >
            {cat.text}
          </NavLink>
        );
      })}
    </section>
  );
}

export default Navbar;
