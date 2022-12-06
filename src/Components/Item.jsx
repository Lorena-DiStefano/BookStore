import { Link } from 'react-router-dom'

const Item = ({ book }) => {

  const { id, image, title, author, price } = book

  return (
    <div className="card">
      <Link to={`/id/${id}`} className="text-decoration-none text-dark">
        <div className="card_item ">
          <div class="card_item_dos">
            <img src={image} alt={title} />
            <div className="card_item_body">
              <h6 className='fw-bold'>{title}</h6>
              <p className="fs-6">{author}</p>
              <div className="card_item_btm d-flex justify-content-between" >
                <p className='fs-6 fw-bold'>${price}</p>
                <p> Más...</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div >

  )
}

export default Item

  // < div class="row row-cols-1 row-cols-sm-2 g-3" >
  //   <div class="col">
  //     <div class="card">
  //       <img src="assets/images/bs-images/img-2x1.png" class="card-img-top" alt="card-grid-image">
  //         <div class="card-body">
  //           <h5 class="card-title">Card title</h5>
  //           <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  //         </div>
  //     </div>
  //   </div>