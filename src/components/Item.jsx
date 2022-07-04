import React from "react";
import "./Item.css"

function Item({ title, img, description, price }) {
  return (
    <div>
      <div className="capacitacionesCard">
        <img src={require(`../assets/img/${img}`)} alt={title} className="capacitacionesImg" />
        <div className="capacitacionesBody">
          <h5 className="capacitacionesTitle">{title}</h5>
          <p>{description}</p>
          <p>${price}</p>
          <button className="capacitacionesButton" onClick={description}>Ver más</button>
        </div>
      </div>
    </div>
  );
}

export default Item;
