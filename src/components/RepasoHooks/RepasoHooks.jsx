import React, { useEffect } from "react";
import { useState } from "react";

function RepasoHooks() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(100)

  const suma = () => {
    setCount(count + 1)
  }
  const suma2 = () => {
    setCount2(count2 + 1)
  }


  useEffect(() => {
    console.log("Hola mundo")
  
   
  },[count,count2])
  // --> Se muestra el cambio en el console.log cada vez que hay un cambio
  // ,[] Solo 1 vez
  // ,[count] cada vez q se modifica ese count, se renderiza 


  return (
    <>
      <hr />
      <div>RepasoHooo</div>
      <h1>Contador 1</h1>
      <h2>{count}</h2>
      <button onClick={suma}>+</button>
      <hr />
      <h1>Contador 2</h1>
      <h2>{count2}</h2>
      <button onClick={suma2}>+</button>
      <hr />
      
     
    </>
  );
}

export default RepasoHooks;
