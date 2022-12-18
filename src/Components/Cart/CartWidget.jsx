import './Cart.css';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <Link to={'/CartDetail'}>
            <button type="button" className="btnCartW position-relative">
                <i className="bi bi-cart-check-fill"></i>
                <span className=" mCart position-absolute top-0 start-100 translate-middle badge rounded-pill">
                    0+
                </span>
            </button>
        </Link>
    )
}

export default CartWidget