import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "./Context/CartContext";
import ItemCart from "./ItemCart";
import "./Cart.css";
import { Link } from "react-router-dom";
import Formulario from "./Formulario";


function Cart() {
  const [finalizarCompra, setFinalizarCompra] = useState(false);
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
                img={unProducto.image}
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
          <button onClick={() => setFinalizarCompra(true)}>
            Finalizar Compra
          </button>
          {finalizarCompra && <Formulario items={cart} total={totalPrice()} />}
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
