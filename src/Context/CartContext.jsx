import { createContext, useState, } from 'react'
import { useNavigate } from 'react-router-dom'

export const CartContext = createContext([])

export const CartContextProvider = ({ children }) => {

  const [cartList, setCartList] = useState([])

  const navigate = useNavigate()

  const isInCart = (id) => cartList.find(item => item.id === id)

  const addTocart = (book, quantity) => {
    if (isInCart(book.id)) {
      const newItemQuantity = cartList.map(item => {
        if (item.id === book.id) {
          const newQuantity = item.quantity + quantity
          return { ...item, quantity: newQuantity }
        } else {
          return item
        }
      })
      setCartList(newItemQuantity)
    } else {
      const newItemCart = { ...book, quantity: quantity }
      setCartList([...cartList, newItemCart])
    }
  }

  const removeItem = (id) => setCartList(cartList.filter(item => item.id !== id))

  const cleanCart = () => {
   cartList([])
    navigate('/allBooks')
  }
 
  const totalQuantity = () => {
    return cartList.reduce((acc, item) => acc += item.quantity, 0)
  }
  const fullPayment = () => {
    return cartList.reduce((acc, item) => acc += (item.price * item.quantity), 0)
  }


  return (
    <CartContext.Provider value={{
      cartList,  
      setCartList,
      addTocart,
      removeItem,
      cleanCart,
      totalQuantity,
      fullPayment
    }}>
      {children}
    </CartContext.Provider>
  )
}
