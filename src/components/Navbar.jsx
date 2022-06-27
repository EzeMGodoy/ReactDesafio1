import React, { useState } from "react";
import { NavPage } from "./NavBarStyle";
import { BgDiv } from "./NavBarStyle";
import BurguerMenu from "./BurguerMenu";
import CartWidget from "./CartWidget";


function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <NavPage>
        <a href="/" className="logo">
          Ser <span>Impersonal</span>
        </a>
        <div className={`menu ${clicked ? "active" : ""}`}>
          <a onClick={handleClick} href="#h" className="selected">
            Inicio
          </a>
          <a onClick={handleClick} href="#h">
            Capacitaciones
          </a>
          <a onClick={handleClick} href="#h">
            Blog
          </a>
          <a onClick={handleClick} href="#h">
            Nosotros
          </a>
          <a onClick={handleClick} href="#h">
            Contacto
          </a>
        <CartWidget/>
          
        </div>
        <div className="burguer">
          <BurguerMenu clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? "active" : ""}`}></BgDiv>
      </NavPage>
    </>
  );
}

export default Navbar;

