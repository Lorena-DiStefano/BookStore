import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { books } from '../Data/books'
import { Loader } from '../OtherTools/Loader'

import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {

  const [bookList, setBookList] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    const data = new Promise((resolve) => {
      setTimeout(() => {
        setLoading(false)
        resolve(books.find(book => book.id === id))
      }, 1000)
    })

    data.then((data) => {
      setBookList(data)
    })
  }, [id])

  return (
    <div>
      {
        loading ? <Loader/> : <ItemDetail bookList={bookList} />
      }
    </div>
  )

}
