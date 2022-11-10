import './ItemCount.css';
import React, {useState, useEffect} from 'react';
import { getFirestore } from 'firebase/firestore';


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

    const querydb = getFirestore();


  return (
    <div className='counter'>
        <button disabled={count <= 1} onClick={resta} >-</button>
        <span>{count} </span>
        <button disabled={count >= stock } onClick={suma}>+</button>
        <div>
            <button disabled={querydb.stock <= 0} onClick={() => onAdd(count)}>Al Carrito</button>
        </div>
    </div>
  )
}
