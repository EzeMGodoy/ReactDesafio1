import React from 'react'
import Item from './Item'
import './ItemList.css'

function ItemList({listadoProductos}) {

  return (
    <div className='listaProductosContainer'>
        <div className='separadorCards'>
            {listadoProductos.map((unProducto)=> <Item key={unProducto.id} title={unProducto.title} img={unProducto.img} price={unProducto.price}/> )}
        </div>
    </div>
  )
}

export default ItemList