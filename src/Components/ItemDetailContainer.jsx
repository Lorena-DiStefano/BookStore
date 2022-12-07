import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { books } from '../Assets/books'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {

  const [bookList, setBookList] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const data = new Promise((resolve) => {
      setTimeout(() => {
        resolve(books.find(book => book.id ===id))
      }, 1000)
    }) 

    data.then((data) => {
      setBookList(data)
    })
  }, [id])

  return (
    <div>
      <ItemDetail bookList={bookList} />
    </div>
  )

}
console.log(books)