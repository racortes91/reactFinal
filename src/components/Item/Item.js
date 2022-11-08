import React, { useContext }  from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Item = ({info}) => {
 

  return (
        <Link to={`/detalle/${info.id}`} className='juego'>
            <img src={info.img} />
            <p> {info.nombre} </p>
            <p> ${info.precio} </p>
        </Link>
    ) 
    }

    export default Item;