import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import './Cart.css';

export const CartDetail = () => {

  const { cartList, fullPayment, removeItem, cleanCart } = useContext(CartContext)
  const navigate = useNavigate()

  cartList.length < 1 && navigate('/allBooks') 

  return (
      <div className='cartBody'>
        <div className='cart' >
          {cartList.map(item => (
            <div className='cartItem' key={item.id}>
              <div>
                <button type="button" className='cartDetail_btn' onClick={() => removeItem(item.id)}><i className="bi bi-trash"></i></button>
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
            <button type='button' className='cartDetail_btn' onClick={cleanCart}><i className="bi bi-cart-x-fill"></i></button>
          </div>
          <hr />
          <div className='cartDetail_end'>
            <h5><b>Total a pagar: </b>$ {fullPayment().toLocaleString()}</h5>
            <button type='button' className='cart_endBtn'>
              <Link to={"/CartOrder"} className="cartDetail_link">Finalizar Compra</Link>
            </button>
          </div>
        </div>
      </div >
  )
}

export default CartDetail
