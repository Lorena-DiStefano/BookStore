import React from 'react'

export const ItemDetail = ({ book }) => {

  const { image, title, author, gender, language, description, price } = book

  return (
    <div className="cardDetail">
      <div className="row g-0">
        <div className="col-5 col-sm-4">
          <img src={image} alt={title}  />
        </div>
        <div className="col-7 col-sm-8">
          <div className="cardDetail-body">
            <h5>{title}</h5>
            <h6>"Autor:"{author}</h6>
            <p>"Género:"{gender} </p>
            <p>"Idioma:"{language}</p>
            <p>"Sinopsis:"{description}</p>
            <p>${price}</p>            
          </div>
        </div>
      </div>
    </div>
  )
}
