import React from 'react'

function ItemDetail(props) {
  return (
    <div className='detailProduct'>
        <h1>{props.detail.title}</h1>
        
    </div>
  )
}

export default ItemDetail