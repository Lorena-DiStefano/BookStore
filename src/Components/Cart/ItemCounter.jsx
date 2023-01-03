import { useState } from 'react'
import './Cart.css';

export const ItemCounter = ({ stock, onAdd }) => {    
   
    const [count, setCount] = useState(1)
    const increase = () => count < stock && setCount(count + 1)
    const decrease = () => count > 0 && setCount(count - 1)
    
    return (
        <div>
            <button className="btn" type="button" onClick={decrease}>-</button>
            <button className="btn-a" type="button" onClick={()=> onAdd(count)}> Comprar {count} </button>
            <button className="btn" type="button" onClick={increase}>+</button>
        </div>
    )
}
