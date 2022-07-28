import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { useState } from "react";

function Formulario(props) {
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  const titleHandler = (event) => {
    setNewTitle(event.target.value);
  };
  const amountHandler = (event) => {
    setNewAmount(event.target.value);
  };
  const dateHandler = (event) => {
    setNewDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const newBuyer = {
      name: newTitle,
      phone: newAmount,
      email: new Date(newDate),
    };

    const order = {
      buyer: newBuyer,
      total: estadoPrecioTotal,
      items: estadoCart,
      date: Date(),
    };

    const ordersCollection = collection(db, "orders");
    
    addDoc(ordersCollection, order).then((doc) => setNewOrderId(doc.id));

    props.onSaveData(newExpense);

    setNewTitle("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div>
          <label>Title</label>
          <input
            type="text"
            placeholder="Nuevo Titulo"
            value={newTitle}
            onChange={titleHandler}
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={newAmount}
            onChange={amountHandler}
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
