import './Cart.css';
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext';
import { ItemCounter } from './ItemCounter';


export const CartDetail = () => {

  const { cartList, fullPayment } = useContext(CartContext)
  console.log(cartList)

  return (
    <div className='cartDetail'>
      <div className='cart'>
        <table >
          <thead>
            <tr >
              <th scope="col" className="col-1"></th>
              <th scope="col" className="col-2">Tu Compra</th>
              <th scope="col" className="col-2">Precio</th>
              <th scope="col" className="col-2">Cantidad</th>
              <th scope="col" className="col-2">Total</th>
            </tr>
          </thead>
          {cartList.map(item => (
            <tbody key={item.id}>
              <tr className='cartBody' >
                <th scope="row">
                  <button type="button"><i className="bi bi-trash"></i></button>
                </th>
                <td><img src={item.image} alt={item.title} /></td>
                <td>$ {(item.price).toLocaleString()}</td>
                <td className='text-center'>{item.quantity}</td>
                <td>$ {(item.quantity * item.price).toLocaleString()}</td>
             
              </tr>
            </tbody>
          ))}

        </table>
      </div>
    </div>
  )
}

export default CartDetail

