import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notFoundContainer">
      <div className="notFound">
      <h1 style={{ color: "red", fontSize: 100 }}>404</h1>
        <h3>Página no encontrada</h3>
        <p>
          <Link to="/">Volver al Home</Link>
        </p>
      </div>
    </div>
  );
}

export default NotFound;
