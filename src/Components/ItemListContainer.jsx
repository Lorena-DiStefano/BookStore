import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { books } from '../Assets/books'
import { ItemList } from './ItemList'


export const ItemListContainer = () => {

    const [bookList, setBookList] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const data = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? books.filter(book => book.gender === id) : books)
            }, 2000)
        })

       


        data.then((data) => {
            setBookList(data)
        })
    }, [id])   

    return (
        <div>
             <ItemList bookList={bookList} /> 
        </div>
    )

}


