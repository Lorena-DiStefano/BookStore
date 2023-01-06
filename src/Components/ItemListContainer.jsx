import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Loader } from '../OtherTools/Loader'
import { ItemList } from './ItemList'
import fetchData from '../Firebase/FetchData'

export const ItemListContainer = () => {

    const [bookList, setBookList] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [allBooks, setAllBooks] = useState([])
    const { id } = useParams()

    useEffect(() => {

        id ? fetchData(id).then(res => {
            setBookList(res)
            setLoading(false)
        }) :
            fetchData().then(res => {
                setAllBooks(res)
                setBookList(res)
                setLoading(false)
            })

    }, [id])

    const SearchUpdate = (e) => {
        e.preventDefault()
        const resultado = allBooks.filter(book => book.title.toLowerCase().includes(search))
            || (book => book.author.toLowerCase().includes(search)) || (book => book.saga.toLowerCase().includes(search))
       
        if (resultado.length) {
            setErrorMessage('')
            setBookList(resultado)
            setAllBooks(resultado)
        } else {
            setErrorMessage('No hay coincidencias con su búsqueda')            
        }
    }

    return (
        <div>
            {!id &&
                <form>
                    <input value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} />
                    <button type="submit" onClick={(e) => SearchUpdate(e)}>enviar</button>
                    {errorMessage !== '' && <p>{errorMessage}</p>}
                </form>
            }
            {
                loading ? <Loader /> : <ItemList bookList={bookList} />
            }
        </div>
    )
}


