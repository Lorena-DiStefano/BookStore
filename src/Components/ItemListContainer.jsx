import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Loader } from '../OtherTools/Loader'
import { ItemList } from './ItemList'
import fetchData from '../Firebase/FetchData'


export const ItemListContainer = () => {

    const [bookList, setBookList] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {

        id ? fetchData(id).then(res => {
            setBookList(res)
        }) : fetchData().then(res => {
            setBookList(res)
        })

    }, [id])

    console.log(bookList)


    return (
        <div>
            {
                loading ? <Loader /> : <ItemList bookList={bookList} />
            }
        </div>
    )
}


