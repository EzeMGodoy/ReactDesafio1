import React from "react";
import { useState, useEffect } from "react";
import "./Container.css";
import ItemDetail from "../ItemDetail";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

function Container() {
  const [capacitacionesFetch, setCapacitacionesFetch] = useState([]);
  const [newError, setNewError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const { iditem } = useParams();
  // const [buttonClicked, setButtonClicked] = useState(false);

  /* const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
    setIsLoading(true)
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("../api.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Ocurrio un error! Intentalo más tarde");
          } else {
            return response.json();
          }
        })
        .catch((error) => {
          setNewError(error.message);
          setIsLoading(false);
        })
        .then((data) =>
          setdescriptionFetch(data.filter((i) => i.id === iditem))
        );
    }, 1000);
  }, [iditem]);
 */

  useEffect(() => {
    // setIsLoading(true)
    const db = getFirestore();

    // const capacitacionesRef = collection(db, "capacitaciones");
    /* getDocs(capacitacionesRef).then((snapshot) => {
      setCapacitacionesFetch(snapshot.docs.map((doc) => doc.data()));
    });
  }, []); */

    const q = query(
      collection(db, "capacitaciones"),
      where("id", "==", 1)
    );
    getDocs(q).then((snapshot) => {
      setCapacitacionesFetch(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="container">
      {/* <button onClick={handleButtonClick}>Ver más</button> */}
      {isLoading && <p>Loading...</p>}
      {newError && <p>{newError}</p>}

      <ItemDetail listadoProductos={capacitacionesFetch[0]} />

      {/* <div>
        {buttonClicked && descriptionFetch.length !== 0 && (
          <ItemDetail
            detail={descriptionFetch[0]}
            handleButtonClick={handleButtonClick}
          />
        )}
      </div> */}
    </div>
  );
}

export default Container;

//Container hace el pedido de la informacion (api) y se lo pasa a CardList
