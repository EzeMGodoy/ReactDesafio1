import React from "react";
import { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import ItemCart from "./ItemCart";
import "./Cart.css"

function Cart() {
  const { cart, removeFromCart, clearCart, totalPrice } = useContext(CartContext);
  const remover = (id) => {
    removeFromCart(id)
  }
  return (
    <div className="cartContainer">
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
      <button className="borrarCarrito" onClick={clearCart}>Borrar carrito</button>
      <p className="totalPrice">TOTAL $: {totalPrice()}</p>
    </div>
  );
}

export default Cart;
