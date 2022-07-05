import React from 'react'
import './ItemDetail.css'

function ItemDetail(props) {
  return (
    <div className='detailProduct'>
        <h1>{props.detail.title}</h1>
        <p>{props.detail.description}</p>
        <p className='price'>${props.detail.price}</p>
        <img src={require(`../assets/img/${props.detail.img}`)} alt={props.detail.title} style={{width: '100%'}}/>
    </div>
  )
}

export default ItemDetail