import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const [descriptionFetch, setdescriptionFetch] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("./api.json")
        .then((res) => res.json())
        .then((data) => setdescriptionFetch(data.filter((i) => i.id === 1)));

      console.log(descriptionFetch);
    }, 2000);
  }, []);

  return (
    <div className="ItemDetailContainer">
      <button>Ver más</button>
      {descriptionFetch.length !== 0 && (
        <ItemDetail detail={descriptionFetch} />
      )}
    </div>
  );
}

export default ItemDetailContainer;
