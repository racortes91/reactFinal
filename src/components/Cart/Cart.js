import React from 'react';
import './Cart.css';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore';


export const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  const orden ={
    persona: {
      name: 'Rafael',
      email: 'rafael@hola.cl',
      phone: '123456789',
      direccion: 'Av. Siempre Viva 742, Springfield'
    },

    items: cart.map((product) => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity, })),
		total: totalPrice(),
 };

  const confirmClick = () => {
      const dataBase = getFirestore();
      const ordenCollection = collection(dataBase, 'orden');
      addDoc(ordenCollection, orden).then(({ id} ) => console.log(id));
  }



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
    <div className='contendor__cart'>
      <div className='item__cart'>
          {cart.map((product) => (
          <ItemCart key={product.id} product={product} />
        ))}
      </div>
      <div className='info__cart'>
        <button onClick={confirmClick}>Comprar</button>
        <p>total: {totalPrice()}</p>
      </div>
    </div>
    
			
    </>
  )
}

export default Cart;


