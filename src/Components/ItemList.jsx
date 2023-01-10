import Item from './Item'

export const ItemList = ({ bookList }) => {   
  
  const bookSort= bookList.sort((a, b) => a.index - b.index)
  
  return (
    <div className="itemList">
      {
         bookSort.map(book => <Item key={book.id} book={book} />)     
      }         
    </div>    
  )
}
