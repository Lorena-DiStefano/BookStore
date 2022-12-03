import { useState } from 'react'
import Products from './Products/ArrayProducts.json'

export const ItemCounter = () => {   

    const stock = 10

    const [count, setCount] = useState(0)

    const increase = () => count < stock && setCount(count + 1)
    const decrease = () => count > 0 && setCount(count - 1)

    return (
        <div>
            <button type="button" onClick={decrease}>-</button>
            <button type="button">Comprar: {count}</button>
            <button type="button" onClick={increase}>+</button>
        </div>
    )
}
