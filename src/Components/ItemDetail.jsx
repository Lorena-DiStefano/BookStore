import React from 'react'
import { Link } from 'react-router-dom'
import { ItemCounter } from './ItemCounter'

export const ItemDetail = ({ bookList }) => {

  const { image, title, author, genre, language, description, price } = bookList

  return (
    <div className="card_detail">
      <img className="card_detail_img" src={image} alt={title} />
      <div className="card_detail_bodyContainer">
        <div className="card_detail_body">
          <div className="card_detail_top">
            <h2>{title}</h2>
            <i class="bi bi-box-arrow-left btn"></i>
          </div>
          <h5>Autor: {author}</h5>
          <p><b>Género:</b> {genre} </p>
          <p><b>Idioma:</b> {language}</p>
          <p><b>Sinopsis:</b> {description}</p>
          <h5>${price}</h5>
        </div>
        <div className="card_detail_btn">
          <ItemCounter center />
        </div>
      </div>
    </div>
  )
}
