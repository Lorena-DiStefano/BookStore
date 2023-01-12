import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../Utils/Loader/Loader';
import { ItemList } from './ItemList';
import fetchData from '../Utils/FetchData';

export const ItemListContainer = () => {
    const [bookList, setBookList] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {

        id ? fetchData(id).then(res => {
            setBookList(res)
            setLoading(false)
        }) :
            fetchData().then(res => {
                setBookList(res)
                setLoading(false)
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

