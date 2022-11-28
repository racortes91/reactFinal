import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from 'react';
import './Cart.css';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';
import Swal from 'sweetalert2/dist/sweetalert2.js'


export const Cart = () => {

  const { cart, totalPrice } = useCartContext();

    // let nombreUsuario = document.getElementById('nombreForm');
    // let direcUsuario = document.getElementById('direcForm');
    // let phoneUsuario = document.getElementById('telefonoForm');


    const buyer = [{
      name: document.getElementById('nombreForm'),
      direction: document.getElementById('direcForm'),
      phone: document.getElementById('telefonoForm')
    }
    ];

    const orden = {
    
      items: cart.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: product.quantity,
      })),
    };

  const confirmClick = (e) => {
    e.preventDefault();
    if (!buyer.name || !buyer.direction || !buyer.phone ) { 
      Swal.fire(`rellena los datos del form para continuar la compra`);
      console.log(buyer.name);
    }else {
      const dataBase = getFirestore();
      const ordenCollection = collection(dataBase, 'orden');
      addDoc(ordenCollection, orden).then(({ id} ) => Swal.fire(`Gracias por comprar con nosotros ${buyer.name}, tu compra será despachada a ${buyer.direction}. Tu identificador es: ${id}`) );
    }
  };

  if (cart.length === 0) {
    return (
      <>
        <p> Carrito sin productos</p>
        <Link to='/'> Encuentra aquí tu juego favorito</Link>
      </>
    );
  }

  const cleanCart = () => {
    if (cart.length >= 0) {
      window.location.href="http://localhost:3000"
    }
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
          <button onClick={cleanCart}>Vaciar Carrito</button>
          <form className='form'>
            <label>Nombre</label>
            <input type="text" id="nombreForm" ></input>
            <label>Dirección</label>
            <input type="text" id="direcForm"></input>
            <label>Teléfono</label>
            <input type="number" id="telefonoForm"></input>

          </form>
          <button onClick={confirmClick}>Comprar</button>
        </div>

      </div>
    </>
  )
}

export default Cart;



