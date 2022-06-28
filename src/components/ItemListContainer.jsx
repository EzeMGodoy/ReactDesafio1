import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import "./ItemListContainer.css";

function ItemListContainer({ greetings }) {
  const [productosFetch, setProductosFetch] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      
      fetch("./api.json")
        .then((res) => res.json())
        .then((data) => setProductosFetch(data))
        .catch((err) => console.log(err));
    }, 1000);
  }, []);



  return (
    <div className="itemListContainer">
      <p className="tituloListContainer">{greetings}</p>
      <ItemList listadoProductos={productosFetch}/>
    </div>
  );
}

export default ItemListContainer;
