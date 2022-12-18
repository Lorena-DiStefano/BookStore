import { createContext, useState, useContext } from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {

  const [cartList, setCartList] = useState([])

  const isInCart = (id) => cartList.find(book => book.id === id)

  const addTocart = (item, quantity) => {
    if (isInCart(item.id)) {
      const newItemQuantity = cartList.map(book => {
        if (book.id === item.id) {
          const newQuantity = book.quantity + quantity
          return { ...book, quantity: newQuantity }
        } else {
          return book
        }
      })
      setCartList(newItemQuantity)
    } else {
      const newItemCart = { ...item, quantity: quantity }
      setCartList([...cartList, newItemCart])
    }
  }

  const removeItem = (id) => setCartList(cartList.filter(book=>book.id!==id))

  const cleanCart = () => setCartList([])

  const totalQuantity = () => {
    return cartList.reduce ((acc,book)=> acc+= book.quantity )
  }
  const fullPayment = () => {
    return cartList.reduce((acc,book)=> acc+=(book.price * book.quantity),0)
  }


  return (
    <CartContext.Provider value={{
      addTocart,
      removeItem,
      cleanCart,
      totalQuantity,
      fullPayment,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext