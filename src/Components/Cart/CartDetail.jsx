import './Cart.css';
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext';


export const CartDetail = () => {

  const { cartList, fullPayment } = useContext(CartContext)
  console.log(cartList)

  return (
    <div className='CartDetail'>     
      <table >     
        {cartList.map(item => (
          <tbody className='cartItemDetail' key={item.id}>
            <td ><button ><i class="bi bi-trash"></i></button></td>
            <td ><img src={item.image} alt={item.title} /></td>
            <td >{item.title}</td>
            <td >{item.quantity}</td>
            <td >${item.price}</td>
            <td >${item.quantity * item.price}</td>            
          </tbody>
        ))
        }   
      </table>
    </div>
  )
}

export default CartDetail

  // cartList.map(item =>
  //   key={item.id}>