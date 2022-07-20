import React from "react";
import { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import ItemCart from "./ItemCart";
import "./Cart.css";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, clearCart, totalPrice } =
    useContext(CartContext);
  const remover = (id) => {
    removeFromCart(id);
  };
  return (
    <div className="cartContainer">
      {cart.length !== 0 ? (
        <>
          <div className="cartItems">
            {cart.map((unProducto) => (
              <ItemCart
                key={unProducto.id}
                id={unProducto.id}
                title={unProducto.title}
                img={unProducto.img}
                price={unProducto.price}
                quantity={unProducto.quantity}
                remove={remover}
              />
            ))}
          </div>
          <button className="borrarCarrito" onClick={clearCart}>
            Borrar carrito
          </button>
          <p className="totalPrice">TOTAL $: {totalPrice()}</p>
        </>
      ) : (
        <>
          <h4>CARRITO VACIO</h4>
          <h4>
            <Link to="/">Regresar a Compras</Link>
          </h4>
        </>
      )}
    </div>
  );
}

export default Cart;
