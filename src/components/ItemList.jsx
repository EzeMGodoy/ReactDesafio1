import React from 'react'
import Item from './Item'
import './ItemList.css'

function ItemList({listadoProductos}) {

  return (
    <div className='listaProductosContainer'>
        <div className='separadorCards'>
            {listadoProductos.map((unProducto)=> <Item key={unProducto.id} id={unProducto.id} title={unProducto.title} img={unProducto.img} price={unProducto.price} category={unProducto.category} description={unProducto.description} /> )}
        </div>
    </div>
  )
}

export default ItemList

// recive listadoProductos de ItemListContainer linea 24 y aca lo mapea