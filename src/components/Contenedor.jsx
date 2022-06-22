import { useState } from "react"
import Hello from "./Hello"

function Contenedor() {
    const [name, setName ] = useState('Contador en 0')
  return (
    <>
    <Hello name={name}/>
    <button onClick={() => setName("Contador en 1")}>Click Me!</button>
    </>
  )
}

export default Contenedor