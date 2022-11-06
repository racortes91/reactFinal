import './ItemCount.css';
import React, {useState, useEffect} from 'react';


export const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(parseInt(initial));

    const resta = () => { 
        setCount(count - 1);
    }

    const suma = () => { 
        setCount(count + 1);
    }

    useEffect (() => {
        setCount(parseInt(initial));
    }, [initial])

  return (
    <div className='counter'>
        <button disabled={count <= 1} onClick={resta} >-</button>
        <span>{count} </span>
        <button disabled={count >= stock } onClick={suma}>+</button>
        <div>
            <button disabled={stock <= 0} onClick={() => onAdd(count)}>Al Carrito</button>
        </div>
    </div>
  )
}
