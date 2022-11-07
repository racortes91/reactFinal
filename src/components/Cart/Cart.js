import React from 'react';
import './Cart.css';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.lenght === 0) {
    return (
      <>
        <p> Carrito sin productos</p>
        <Link to='/'> Encuentra aquí tu juego favorito</Link>
      </>
    );
  }

  return (
    <div>Cart</div>
  )
}
