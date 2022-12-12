import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { books } from '../Data/books'
import { Loader } from '../OtherTools/Loader'
import { ItemList } from './ItemList'

export const ItemListByAuthor = () => {

    const [bookList, setBookList] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const data = new Promise((resolve) => {
            setTimeout(() => {
                setLoading(false)
                resolve(id ? books.filter(book => book.author === id) : books)
            }, 1000)
        })

        data.then((data) => {
            setBookList(data)
        })

    }, [id])

    return (
        <div>
            {
                loading ? <Loader /> : <ItemList bookList={bookList} />
            }
        </div>
    )
}

export default ItemListByAuthor