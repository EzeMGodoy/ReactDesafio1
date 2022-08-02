import React from "react";
import { useState } from "react";
import { addVenta } from "./services/firestore";
import Swal from "sweetalert2";

function Formulario({ items, total }) {
  const [newNombre, setNewNombre] = useState("");
  const [newApellido, setNewApellido] = useState("");
  const [newDate, setNewDate] = useState("");
  const [idVenta, setIdVenta] = useState("");

  const nombreHandler = (event) => {
    setNewNombre(event.target.value);
  };
  const apellidoHandler = (event) => {
    setNewApellido(event.target.value);
  };
  const dateHandler = (event) => {
    setNewDate(event.target.value);
  };
  const submitHandler = async (event) => {
    console.log("HOLA");
    event.preventDefault();

    const newBuyer = {
      name: newNombre,
      lastname: newApellido,
      date: new Date(newDate),
    };

    const order = {
      buyer: newBuyer,
      total: total,
      items: items,
      date: Date(),
    };

    const venta = await addVenta(order);
    console.log(venta);
    setIdVenta(venta.id);

    Swal.fire({
      title: "Compra realizada",
      text: `Su compra ha sido realizada. Su código es: ${venta.id}`,
      icon: "success",
      confirmButtonText: "Ok",
    });
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
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={newDate}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default Formulario;
