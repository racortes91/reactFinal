import React from 'react';
import './CartItem.css';

export const CartItem = ({productos}) => {
    const { removeProduct } = useCartContext();
    return (
        <>
            <div className='itemCart'>
                <img src={productos.img} alt={productos.nombre} />
                <div>
                    <p>Título: {productos.title}</p>
                    <p>Cantidad: {productos.quantity}</p>
                    <p>Precio u.: {productos.precio}</p>
                    <p>Subtotal: ${productos.quantity * productos.precio}</p>
                    <button onClick={() => removeProduct(productos.id)}>Eliminar</button>
                </div>
            </div>
        </>
    )
}
