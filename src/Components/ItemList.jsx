import Item from './Item'

export const ItemList = ({bookList}) => {   
  return (
    <div className="itemList">
      {
         bookList.map(book => <Item key={book.id} book={book} />)        
      }         
    </div>    
  )
}
