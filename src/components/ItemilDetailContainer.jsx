import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const [descriptionFetch, setdescriptionFetch] = useState([]);

  const [buttonClicked, setButtonClicked] = useState(false);
  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("./api.json")
        .then((res) => res.json())
        .then((data) => setdescriptionFetch(data.filter((i) => i.id === 1)));
    }, 2000);
  }, []);

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
  );
}

export default ItemDetailContainer;
