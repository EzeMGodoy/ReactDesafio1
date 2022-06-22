import "./Cards.css";


function Cards({product, price, img}) {
  return (
   <div className="cards">
    <h4>{product}</h4>
    <p>{price}</p>
    <img src={img} alt=""/>
   </div>
  );
}

export default Cards;
