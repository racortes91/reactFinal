import React from 'react';
import './CartItem.css';

export const CartItem = ({products}) => {
    const { removeProduct } = useCartContext();
    return (
        <>
            <div className='itemCart'>
                <img src={products.img} alt={products.nombre} />
                <div>
                    <p>Título: {products.title}</p>
                    <p>Cantidad: {products.quantity}</p>
                    <p>Precio u.: {products.precio}</p>
                    <p>Subtotal: ${products.quantity * products.precio}</p>
                    <button onClick={() => removeProduct(products.id)}>Eliminar</button>
                </div>
            </div>
        </>
    )
}
