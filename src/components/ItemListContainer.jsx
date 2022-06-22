import './ItemListContainer.css'

function ItemListContainer(props) {
  return (
    <div className='itemListContainer'>
        <p className='tituloListContainer'>{props.title}</p>
    </div>
  )
}

export default ItemListContainer