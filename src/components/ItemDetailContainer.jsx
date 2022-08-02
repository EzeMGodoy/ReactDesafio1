import React, { useState, useEffect } from "react";

import ItemDetail from "./ItemDetail";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import { getCapacitacionId } from "./services/firestore";

function ItemDetailContainer() {
  const [descriptionFetch, setdescriptionFetch] = useState([]);

  const { iditem } = useParams();

  useEffect(() => {
    getCapacitacionId(iditem)
      .then((data) => {
        setdescriptionFetch(data);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }, [iditem]);

  return (
    <div className="itemDetailContainer">
      <div>
        {descriptionFetch.length !== 0 ? (
          <ItemDetail detail={descriptionFetch} />
        ) : (
          <h4>Cargando...</h4>
        )}
      </div>
    </div>
  );
}

export default ItemDetailContainer;
