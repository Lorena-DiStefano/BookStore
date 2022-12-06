import React from 'react'
import {Link} from 'react-router-dom'
import { ItemCounter } from './ItemCounter'

export const ItemDetail = ({ bookList }) => {

  const { image, title, author, genre, language, description, price } = bookList

  return (
    <div className="card_detail">
      <img className="card_detail_img" src={image} alt={title} />

      <div className="card_detail_bodyContainer">
        <div className="card_detail_body">
          <h2>{title}</h2>
          <h5>Autor: {author}</h5>
          <p><b>Género:</b> {genre} </p>
          <p><b>Idioma:</b> {language}</p>
          <p><b>Sinopsis:</b> {description}</p>
          <h5>${price}</h5>
        </div>
        <div className="card_detail_btn">
          <ItemCounter />
          <p>
            Volver
          </p>
        </div>
      </div>
    </div>
  )
}
