import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";


function ItemListContainer({ greetings }) {
  const [productosFetch, setProductosFetch] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const {idcategoria} = useParams();
  
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      
      
      fetch("../api.json")
      .then((res) => res.json())
      .then((data) => idcategoria ? setProductosFetch(data.filter(item => item.category === idcategoria)): setProductosFetch(data))
      .finally(()=> setIsLoading(false))
    }, 1000);
  }, [idcategoria]);
  
  return (
    isLoading ? <h1>Cargando . . .</h1> :
    <div className="itemListContainer">
      <p className="tituloListContainer">{greetings}</p>
      <ItemList listadoProductos={productosFetch} />
    </div>
  );
}

export default ItemListContainer;
