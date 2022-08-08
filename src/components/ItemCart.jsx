import React from "react";
import "./ItemCart.css"

function ItemCart({ id, title, price, img, quantity, remove }) {
  return (
    <div className="itemCart">
      <img
        src={img}
        alt={title}
        className="capacitacionesImg"
      />
      <div className="capacitacionesBody">
        <h5 className="capacitacionesTitle">{title}</h5>
    
        <p>${price}</p>
        <p>Cantidad: {quantity}</p>
        <button className="borrarItem" onClick={()=>remove(id)}>Borrar</button>
      </div>
    </div>
  );
}

export default ItemCart;
