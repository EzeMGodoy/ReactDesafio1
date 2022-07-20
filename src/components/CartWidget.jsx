import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./CartWidget.css"

function CartWidget() {
  return (
    <Link to="/cart">
    <FaShoppingCart className="cartWidget" />
    </Link>
  )
}

export default CartWidget