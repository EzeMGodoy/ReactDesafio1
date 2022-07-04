import "./CardList.css";
import Card from "../Card/Card";

function CardList(props) {
  return (
    <div className="cards-list">
      {props.tarjetas.map((tarjeta) => (
        <Card key={tarjeta.char_id} name={tarjeta.name} id={tarjeta.char_id} />
      ))}
    </div>
  );
}
export default CardList;

// CardList lo que hace es el mapeo de la informacion
