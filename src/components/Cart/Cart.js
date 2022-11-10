import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from 'react';
import './Cart.css';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';
import Swal from 'sweetalert2/dist/sweetalert2.js'


export const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  const orden ={
    persona: {
      name: 'Rafael',
      email: 'rafael@hola.cl',
      phone: 123456789,
      direccion: 'Av. Siempre Viva 742, Springfield'
    },

    items: cart.map((product) => ({ id: product.id, title: product.nombre, price: product.precio, quantity: product.quantity, })),
		total: totalPrice(),
 };

  const confirmClick = () => {
      const dataBase = getFirestore();
      const ordenCollection = collection(dataBase, 'orden');
      addDoc(ordenCollection, orden).then(({ id} ) => Swal.fire(`Gracias por comprar con nosotros, tu identificador es: ${id}`) );

  };


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
        <p>total: {totalPrice()}</p>
        <button onClick={confirmClick}>Comprar</button>
      </div>
    </div>
    
			
    </>
  )
}

export default Cart;


