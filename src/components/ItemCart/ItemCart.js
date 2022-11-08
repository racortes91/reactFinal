import React from 'react';
import { useCartContext } from '../../context/CartContext';
import './ItemCart.css';

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className='itemCart'>
            <img src={product.img} alt={product.nombre} />
            <div>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio u.: {product.precio}</p>
                <p>Subtotal: {product.quantity * product.precio}</p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}
export default ItemCart
