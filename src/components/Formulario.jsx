import React from "react";
import { useState, useContext } from "react";
import { addVenta } from "./services/firestore";
import Swal from "sweetalert2";
import { CartContext } from "./Context/CartContext";

function Formulario({ items, total }) {
  const [newNombre, setNewNombre] = useState("");
  const [newApellido, setNewApellido] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const { clearCart } = useContext(CartContext);

  const nombreHandler = (event) => {
    setNewNombre(event.target.value);
  };
  const apellidoHandler = (event) => {
    setNewApellido(event.target.value);
  };
  const emailHandler = (event) => {
    setNewEmail(event.target.value);
  };
  const submitHandler = async (event) => {
    event.preventDefault();

    const newBuyer = {
      name: newNombre,
      lastname: newApellido,
    };

    const order = {
      buyer: newBuyer,
      total: total,
      items: items,
    };

    const venta = await addVenta(order);


    Swal.fire({
      title: "Compra realizada",
      text: `Su compra ha sido realizada. Su código es: ${venta.id}`,
      icon: "success",
      confirmButtonText: "Ok",
    });
    clearCart();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div>
          <label>Nombre</label>
          <input
            type="text"
            placeholder="Escriba su nombre"
            value={newNombre}
            onChange={nombreHandler}
          />
        </div>
        <div>
          <label>Apellido</label>
          <input
            type="text"
            placeholder="Escriba su apellido"
            value={newApellido}
            onChange={apellidoHandler}
          />
        </div>
        <div>
          <label>Mail</label>
          <input
            type="email"
            value={newEmail}
            onChange={emailHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Comprar</button>
      </div>
    </form>
  );
}

export default Formulario;
