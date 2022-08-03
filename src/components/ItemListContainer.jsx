import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import {
  getAllCapacitaciones,
  getCapacitacionesCategories,
} from "./services/firestore";

function ItemListContainer({ greetings }) {
  const [productosFetch, setProductosFetch] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { idcategoria } = useParams();

  useEffect(() => {
    setIsLoading(true);

    const consulta = idcategoria
      ? getCapacitacionesCategories(idcategoria)
      : getAllCapacitaciones();
    consulta
      .then((data) => {
        setProductosFetch(data);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      })
      .finally(() => setIsLoading(false));
  }, [idcategoria]);

  return isLoading ? (
    <h1>Cargando . . .</h1>
  ) : (
    <div className="itemListContainer">
      <p className="tituloListContainer">{greetings}</p>
      <ItemList listadoProductos={productosFetch} />
    </div>
  );
}

export default ItemListContainer;
