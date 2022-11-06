 import React, { useState } from 'react';
import './ItemDetail.css';
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

export const ItemDetail = ({data }) => {

  const [goToCart, setGoToCart] = useState(false);

  const onAdd = (quantity) => {
    setGoToCart(true);
  }


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
                      :<ItemCount initial={1} stock={5} onAdd={onAdd} />
                    }
                    
                </div>

            </div>
        </div>
    </>
  )
}
