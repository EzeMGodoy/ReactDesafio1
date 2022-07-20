import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./CartWidget.css";
import { CartContext } from "./Context/CartContext";

function CartWidget() {
  const { totalWidget } = useContext(CartContext);
  let cantidadProductos = totalWidget();
  return (
    <div className="cartWidgetContainer">
      <Link to="/cart">
        <FaShoppingCart className="cartWidget" />
        {cantidadProductos === 0 ? null : <p className="numerito">{cantidadProductos}</p>}
      </Link>
    </div>
  );
}

export default CartWidget;
