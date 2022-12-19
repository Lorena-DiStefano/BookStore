import { Link } from 'react-router-dom'

const Item = ({ book }) => {

  const { id, image, title, author, price } = book

  return (
    <div className="card">
      <Link to={`/id/${id}`} className="text-decoration-none text-dark">
        <img className="card_item_img" src={image} alt={title} />
        <div className="card_item_body">
          <h6><b>{title}</b></h6>
          <p >{author}</p>
          <div className="card_item_btm d-flex justify-content-between" >
            <p><b>${(price).toLocaleString()}</b></p>
            <p>...</p>
          </div>
        </div>
      </Link>
    </div >
  )
}

export default Item
