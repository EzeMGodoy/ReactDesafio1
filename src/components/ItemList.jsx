import React from "react";
import Item from "./Item";
import "./ItemList.css";

function ItemList({ listadoProductos }) {
  return (
    <div className="listaProductosContainer">
      <div className="separadorCards">
        {listadoProductos.map((unProducto, index) => (
          <Item
            key={index}
            id={unProducto.id}
            title={unProducto.title}
            image={unProducto.image}
            price={unProducto.price}
            category={unProducto.categoryId}
            description={unProducto.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ItemList;

// recive listadoProductos de ItemListContainer linea 24 y aca lo mapea
