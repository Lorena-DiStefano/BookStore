import Item from './Item'


export const ItemList = ({bookList}) => {

 
  return (
    <div className="row d-flex flex-wrap d-flex justify-content-evenly m-5">
      {
        bookList.map(book=><Item key={book.id} book={book}/>)
      }
     
    </div>
  )
}
