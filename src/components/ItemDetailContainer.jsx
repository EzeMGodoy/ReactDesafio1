import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [descriptionFetch, setdescriptionFetch] = useState([]);
  const {iditem} = useParams();

  const [buttonClicked, setButtonClicked] = useState(false);
  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("../api.json")
        .then((res) => res.json())
        .then((data) => setdescriptionFetch(data.filter((i) => i.id === iditem)));
    }, 1000);
  }, [iditem]);

  return (
    <div className="itemDetailContainer">
      <button onClick={handleButtonClick}>Ver más</button>
      <div>
        {buttonClicked && descriptionFetch.length !== 0 && (
          <ItemDetail
            detail={descriptionFetch[0]}
            handleButtonClick={handleButtonClick}
          />
        )}
      </div>
    </div>

      // <div className="itemDetailContainer">
      //   <ItemDetail detail={descriptionFetch[0]}/>
      // </div>
    

    // <ItemDetail {...descriptionFetch}/>
  );
}

export default ItemDetailContainer;
