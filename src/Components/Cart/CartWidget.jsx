import './Cart.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';




const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

  
    return (
        <Link to={'/CartDetail'}>
            <button type="button" className="btnCartW position-relative">
                <i className="bi bi-cart-check-fill"></i>
                <span className=" mCart position-absolute top-0 start-100 translate-middle badge rounded-pill">
                {totalQuantity()}
                </span>
            </button>
        </Link>
    )
}

export default CartWidget