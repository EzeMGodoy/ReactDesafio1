import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const params = useParams();
  const [cardFetch, setcardFetch] = useState([]);

  const fetchCard = () => {
    fetch(`https://www.breakingbadapi.com/api/characters/${params.characterId}`)
      .then((response) => response.json())
      .then((data) => setcardFetch(data))
  };

  useEffect(() => {
    fetchCard();
  }, );


  return (
    <div>
    {cardFetch.length !==0 && <h1>Nombre: {cardFetch[0].name}</h1>}
    
    </div>

  ) 
}

export default Detail;


// si tengo un json, voy a tener que ademas usar un filter para traer la informacio que quiero