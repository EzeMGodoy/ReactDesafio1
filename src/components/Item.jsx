import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

function Item({ id, title, img, description, price, category }) {
  return (
    <Link to={`/item/${id}`} >
      <div className={`capacitacionesCard ${category}-category`}>
        <img
          src={require(`../assets/img/${img}`)}
          alt={title}
          className="capacitacionesImg"
        />
        <div className="capacitacionesBody">
          <h5 className="capacitacionesTitle">{title}</h5>
          <p>${price}</p>
          <p>Categoria: {category}</p>
          <button className="capacitacionesButton">Ver más</button>
        </div>
      </div>
    </Link>
  );
}

export default Item;
