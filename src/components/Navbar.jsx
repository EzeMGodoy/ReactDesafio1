import React from "react";
import { Link } from "react-router-dom";
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
          <Link to={cat.address} className="Links" key={cat.id}>
            {cat.text}
          </Link>
        );
      })}
    </section>
  );
}

export default Navbar;
