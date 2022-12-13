import { useState,useEffect } from "react"
import { books } from "../Data/books"


export const Searcher = () => {

    const [bookList, setBookList] = useState([])
    const [search, setSearch] = useState("")
    const { id } = useParams()
    
    const searcher = (e) => {
        setSearch (e.target.value)
    }

    const result = !search ? alert('NOP') : books.filter(book => book.title.includes(search))
    
  return (
    <div>Searcher</div>
  )
}
