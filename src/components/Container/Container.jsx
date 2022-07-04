import React from "react";
import { useState } from "react";
import "./Container.css";
import CardList from "../CardList/CardList";

function Container() {
  const [cardsFetch, setCardsFetch] = useState([]);

  const fetchCards = () => {
    fetch("https://www.breakingbadapi.com/api/characters")
      .then((response) => response.json())
      .then((data) => setCardsFetch(data));
  };

    
  return (
    <div className="container">
      <button onClick={fetchCards}>Ver Personajes</button>
      <CardList tarjetas={cardsFetch} />
    </div>
  );
}

export default Container;

//Container hace el pedido de la informacion (api) y se lo pasa a CardList
