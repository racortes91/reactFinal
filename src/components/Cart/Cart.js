import React from 'react';
import './Cart.css';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';

export const Cart = () => {
  const { cart, totalPrice } = useCartContext();
  console.log(cart)
  if (cart.length === 0) {
    return (
      <>
        <p> Carrito sin productos</p>
        <Link to='/'> Encuentra aquí tu juego favorito</Link>
      </>
    );
  }

  return (
    <>
			{cart.map((product) => (
				<ItemCart key={product.id} product={product} />
			))}
			<p>total: {totalPrice()}</p>
    </>
  )
}

export default Cart;


// {cart.map((producto) => 
//   <div>
//     <img src={producto.img} />
//     <h1>{producto.nombre}</h1>
//     <p>{producto.precio}</p>
//   </div>
//   )};   