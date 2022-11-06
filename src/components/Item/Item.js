import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

export const Item = ({info}) => {
  return (
        <Link to={`/detalle/${info.id}`} className='juego'>
            <img src={info.img} />
            <p> {info.nombre} </p>
        </Link>
    ) 
    }