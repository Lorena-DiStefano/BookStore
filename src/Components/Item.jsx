import { Link } from 'react-router-dom'

const Item = ({ book }) => {

  const { image, title, author, price } = book

  return (
    <div className="col-md-3 mt-3 ">
      <div className="cardItem">
        <img className="card-img card-img-top p-2" src={image} alt={title} />
        <div className="card-body">
          <h5>{title}</h5>
          <h6>{author}</h6>
          <div className="card_botom d-flex justify-content-between" >
            <p>${price}</p>
            {/* <Link to={""}> */}
              Más...
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div >

  )
}

export default Item