import { useState } from "react";
import "./Contador.css";

function Contador() {
  const [num, setNum] = useState(0);

  const sumar = () => {
    setNum(num + 1);
  };
  const restar = () => {
    if (num > 0) {
      setNum(num - 1);
    } else alert("HEYY");
  };
  const reinicar = () => {
    setNum(0);
  };
  return (
    <>
      <div className="contadorContainer">
        <p className="numero">{num}</p>
        <div className="botones">
          <button onClick={sumar}>Sumar!</button>
          <button onClick={restar}>Restar!</button>
          <button onClick={reinicar}>Reinicar!</button>
        </div>
      </div>
    </>
  );
}

export default Contador;
