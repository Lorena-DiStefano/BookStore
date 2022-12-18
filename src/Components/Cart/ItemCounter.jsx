import { useState } from 'react'
import './Cart.css';

export const ItemCounter = ({ stock }) => {    
   
    const [count, setCount] = useState(1)

    const increase = () => count < stock && setCount(count + 1)
    const decrease = () => count > 0 && setCount(count - 1)
    const onAdd = () => stock > 0 && alert("Agregaste: " +count+ " libros al carrito")       

    return (
        <div>
            <button className="btn" type="button" onClick={decrease}>-</button>
            <button className="btn-a" type="button" onClick={onAdd} >Comprar: {count} </button>
            <button className="btn" type="button" onClick={increase}>+</button>
        </div>
    )
}
