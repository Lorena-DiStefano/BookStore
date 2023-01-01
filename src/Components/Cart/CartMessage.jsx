import { redirect } from 'react-router-dom';
import './Cart.css';

export const CartMessage = () => {

    const timer = () => {
        return redirect("/")
    }
    
    return (  
        <>
        <div className="emptyCart">
            <div >
                <img src="images/empty_cart.jpg" alt="dibujo niño" />
            </div>
            <div >
                <p>Aún no agregaste libros a tu carrito</p>
            </div>
        </div>
            setTimeout({timer},3000)        
        </>
    )
}



export default CartMessage
