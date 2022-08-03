import React from "react";
import { useState, useEffect } from "react";
import "./Container.css";
import ItemDetail from "../ItemDetail";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

function Container() {
  const [capacitacionesFetch, setCapacitacionesFetch] = useState([]);
  

  useEffect(() => {
    const db = getFirestore();

    const q = query(collection(db, "capacitaciones"), where("id", "==", 1));
    getDocs(q).then((snapshot) => {
      setCapacitacionesFetch(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="container">
      {isLoading && <p>Loading...</p>}
      {newError && <p>{newError}</p>}

      <ItemDetail listadoProductos={capacitacionesFetch[0]} />
    </div>
  );
}

export default Container;
