import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"

function Card(props) {
  return (
    <div className='card'>
        <Link to={`/personajes/${props.id}`} h2>{props.name}</Link>
        <p>{props.id}</p>
    </div>
  )
}

export default Card


//Card lo que hace es renderizar la informacion traida de CardList