import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "./ItemCount.css";

function Contador({ stock, initial, onAdd }) {
  const [num, setNum] = useState(initial);

  useEffect(() => {
    if (num === stock - 2) {
      Swal.fire({
        title: "Atención",
        text: `Quedan pocas unidades`,
        icon: "warning",
        confirmButtonText: "Aceptar",
      });
    }
  }, [num, stock]);

  const sumar = () => {
    if (num < stock) {
      setNum(num + 1);
    } else {
      Swal.fire({
        title: "Lo sentimos",
        text: `El stock de este producto es de ${stock} unidades.`,
        icon: "warning",
        confirmButtonText: "Aceptar",
      });
    }
  };
  const restar = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      Swal.fire({
        title: "Atención",
        text: "Por favor selecciona al menos 1 producto.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };
  const reiniciar = () => {
    setNum(0);
  };

  const addToCart = () => {
    onAdd(num)

  }
 
  return (
    <>
      <div className="contadorContainer">
        <div className="controladores">
          <button onClick={restar} className="sumAdd restar">
            -
          </button>
          <p className="numero">{num}</p>
          <button onClick={sumar} className="sumAdd sumar">
            +
          </button>

          <button onClick={reiniciar}>Reiniciar!</button>
          <button onClick={addToCart}>Agregar al Carrito</button>
        </div>
      </div>
    </>
  );
}

export default Contador;
