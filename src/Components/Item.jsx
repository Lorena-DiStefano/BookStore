import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react'
import { ItemCounter } from './Cart'

const Item = ({ book }) => {

  const { id, image, title, author, price, stock} = book

  const { addTocart } = useContext(CartContext)

  const onAdd = (quantity) => {
    addTocart(book, quantity)
  }

  return (
    <div className="card">
      <Link to={`/id/${id}`} className="text-decoration-none text-dark">
        <img className="card_item_img" src={image} alt={title} />
      </Link>
        <div className="card_item_body">
          <h6><b>{title}</b></h6>
          <p >{author}</p>
          <div className="card_item_btm d-flex justify-content-between" >
            <p><b>${(price).toLocaleString()}</b></p>
          <ItemCounter stock={stock} onAdd={onAdd} />          
          </div>
        </div>
    </div >
  )
}

export default Item
