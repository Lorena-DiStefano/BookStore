import Item from './Item'

export const ItemList = ({bookList}) => {

  return (
    <div className="itemListContainer">
      {
        bookList.map(book=><Item key={book.id} book={book}/>)
      }
     
    </div>
  )
}
