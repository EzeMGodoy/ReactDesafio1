import React from "react";
import { useState, useContext } from "react";
import { addVenta } from "./services/firestore";
import Swal from "sweetalert2";
import { CartContext } from "./Context/CartContext";
import "./Formulario.css";

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
      <div className="formContainer">
        <div>
          <label className="label">Nombre</label>
          <input
            required
            type="text"
            placeholder="Escriba su nombre"
            value={newNombre}
            onChange={nombreHandler}
          />
        </div>
        <div>
          <label className="label">Apellido</label>
          <input
            required
            type="text"
            placeholder="Escriba su apellido"
            value={newApellido}
            onChange={apellidoHandler}
          />
        </div>
        <div>
          <label className="label">Mail</label>
          <input
            required
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
