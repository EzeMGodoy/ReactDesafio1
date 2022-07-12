import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  const categories = [
    { id: "todos", address: "/", text: "TODOS LOS PRODUCTOS" },
    {
      id: "capacitaciones",
      address: "/category/capacitaciones",
      text: "Categoria CAPACITACIONES",
    },
    { id: "cursos", address: "/category/cursos", text: "Categoria CURSOS" },
    { id: "online", address: "/category/online", text: "Categoria ONLINE" },
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
