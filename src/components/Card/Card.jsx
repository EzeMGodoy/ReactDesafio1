import React from 'react'
import "./Card.css"

function Card(props) {
  return (
    <div className='card'>
        <h2>{props.name}</h2>
        <p>{props.id}</p>
    </div>
  )
}

export default Card


//Card lo que hace es renderizar la informacion traida de CardList