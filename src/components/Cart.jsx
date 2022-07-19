import React from 'react'
import { useContext } from 'react'
import { CartContext } from './Context/CartContext'

function Cart() {
    const cart = useContext(CartContext);
   console.log(cart)
  return (
    <div>
      {/* Como renderizo cada item? */}
    </div>
  )
}

export default Cart