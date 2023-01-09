import './Cart.css';
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';


export const CartDetail = () => {

  const { cartList, fullPayment, removeItem, cleanCart } = useContext(CartContext)  
  
  return (
    <div className='cartDetail'>
      <div className='cart' >
        {cartList.map(item => (
          <div className='cartItem' key={item.id}>
            <div>
              <button type="button" onClick={() => removeItem(item.id)}><i className="bi bi-trash"></i></button>
            </div>
            <div>
              <img src={item.image} alt={item.title} />
            </div>
            <div>
              <h6>Precio</h6>
              <p className='text-end'> $ {(item.price).toLocaleString()}</p>
            </div>
            <div>
              <h6>Cantidad</h6>
              <p className='text-center'> {item.quantity}</p>
            </div>
            <div>
              <h6>Total Item</h6>
              <p className='text-end'> $ {(item.quantity * item.price).toLocaleString()}</p>
            </div>
          </div>
        ))}
        <div className="cleanCart">
          <button type='button' onClick={cleanCart}><i className="bi bi-cart-x-fill"></i></button>
        </div>
        <hr />
        <div className='cartClose'>
          <h5><b>Total a pagar: </b>$ {fullPayment().toLocaleString()}</h5>
          <Link to={"/Checkout"} className="checkoutLink">Finalizar Compra</Link>
        </div>
      </div>
    </div >
  )
}

export default CartDetail
