import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css"

function CartWidget() {
  return (
    <a href="/">
    <FaShoppingCart className="cartWidget" />
    </a>
  )
}

export default CartWidget