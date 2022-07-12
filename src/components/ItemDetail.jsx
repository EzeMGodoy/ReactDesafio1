import React from 'react'
import {useContext, useState} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from './Context/CartContext';
import ItemCount from './ItemCount';
import './ItemDetail.css'

function ItemDetail(props) {
  // const {title, id, description, price, img} = props.item;
  // const {title, id, description, price, img} = props.detail; CREO QUE ES ESTA PERO NO FUNCIONA IGUALMENTE


  
  const {addToCart} = useContext(CartContext);

  const [purchaseCompleted, setPurchaseCompleted] = useState(false)

  const onAdd = (num) => {
    setPurchaseCompleted(true);
    addToCart(props.detail, num)
  }

  return (
    <div className='detailProduct'>
        <h1>{props.detail.title}</h1>
        <p>{props.detail.description}</p>
        <p className='price'>${props.detail.price}</p>
        <img src={require(`../assets/img/${props.detail.img}`)} alt={props.detail.title} style={{width: '100%'}}/>
        {purchaseCompleted ? (
          <Link to="/cart" className='addCarrito'>
            Ir a mi carrito
          
          </Link>
        ):(
          <ItemCount className="itemCount" onAdd={onAdd}/>
        )}
    </div>
  )
}

export default ItemDetail



