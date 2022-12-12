import { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import { books } from '../Data/books'
import { Loader } from '../OtherTools/Loader'
import { ItemList } from './ItemList'

export const ItemListByLanguage = () => {
    const [bookList, setBookList] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const data = new Promise((resolve, reject) => {
            setTimeout(() => {
                setLoading(false)
                resolve(id ? books.filter(book => book.language === id) : books)
            }, 1000)
        })

        data.then((data) => {
            setBookList(data)
        })

    },[id])

    return (
        <div>
            {
                loading ? <Loader /> : <ItemList bookList={bookList} />
            }
        </div>
    )

}
