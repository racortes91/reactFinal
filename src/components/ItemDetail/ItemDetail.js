import './ItemDetail.css';
import React, { useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { getFirestore } from 'firebase/firestore';

export const ItemDetail = ({data }) => {

  const [goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity); 
  }


  const querydb = getFirestore();

  return (
    <>
        <div className='container'>
            <div className='detail'>
                <img className='detail__image' src={data.img} />
                <div className='content'>
                    <h1>{data.nombre}</h1>
                    {
                      goToCart
                        ? <Link to='/cart'>Ir al Carrito</Link>
                        : <ItemCount initial={1} stock={querydb.stock} onAdd={onAdd} />
                    }
                    
                </div>

            </div>
        </div>
    </>
  )
}
