import "./Body.css";
import Cards from "./Cards";
import Tarjetas from "../assets/capacitacion2.webp";

function Body() {
  return (
    <section className="cuerpo">
      <Cards product="Mesa" price="$3000" img={Tarjetas} />
      <Cards product="Silla" price="$2500" />
      <Cards product="TV" price="$3000" />
      <Cards product="Cocina" price="$4000" />
    </section>
  );
}

export default Body;
