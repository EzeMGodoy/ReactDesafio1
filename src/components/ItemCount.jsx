import { useState } from "react";
import "./ItemCount.css";

function Contador() {
  const [num, setNum] = useState(0);

  const sumar = () => {
    if (num >= 5) {
      alert("Solo tenemos 5 unidades");
    } else {
      setNum(num + 1);
    }
  };
  const restar = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert("HEY");
    }
  };
  const reinicar = () => {
    setNum(0);
  };
  const onAdd = () => {
    
  };
  return (
    <>
      <div className="contadorContainer">
        <div className="controladores">
          <button onClick={restar} className="sumAdd">
            -
          </button>
          <p className="numero">{num}</p>
          <button onClick={sumar} className="sumAdd">
            +
          </button>
        </div>
        <div className="botones">
          <button onClick={reinicar}>Reinicar!</button>
          <button onClick={onAdd}>Agregar al Carrito</button>
        </div>
      </div>
    </>
  );
}

export default Contador;
