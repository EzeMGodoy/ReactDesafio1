import "./Cards.css";


function Cards({product, description, price, pictureUrl}) {
  return (
   <div className="cards">
    <h4>{product}</h4>
    <p>{description}</p>
    <img src={pictureUrl} alt=""/>
    <p>${price}</p>
   </div>
  );
}

export default Cards;
