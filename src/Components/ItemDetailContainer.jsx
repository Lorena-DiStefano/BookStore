import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Loader } from '../OtherTools/Loader'
import { ItemDetail } from './ItemDetail'
import { getBookById } from '../Firebase/FetchData'

export const ItemDetailContainer = () => {

  const [bookList, setBookList] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()


  useEffect(() => {
    
    getBookById(id).then(res => setBookList(res)).then (res =>setLoading(false))   

  }, [id]);  

  return (
    <div>
      {
        loading ? <Loader/> : <ItemDetail bookList={bookList} />
      }
    </div>
  )

}
