import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc,getFirestore } from "firebase/firestore"
// import { books } from '../Data/books'
import { Loader } from '../OtherTools/Loader'

import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {

  const [bookList, setBookList] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  // useEffect(() => {
  //   const data = new Promise((resolve) => {
  //     setTimeout(() => {
  //       setLoading(false)
  //       resolve(books.find(book => book.id === id))
  //     }, 1000)
  //   })

  //   data.then((data) => {
  //     setBookList(data)
  //   })
  // }, [id])

  useEffect(() => {
    const db = getFirestore();
    const book = doc(db, "bookstore",id );
    getDoc(book).then((snapshot) => {
      if (snapshot.exists()) {
        setBookList({ id: snapshot.id, ...snapshot.data() });
      } else {
        console.log(book);
      }
    });
  }, []);  

  return (
    <div>
      {
        loading ? <Loader/> : <ItemDetail bookList={bookList} />
      }
    </div>
  )

}
