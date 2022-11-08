import React, { useContext, useState } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

    const addProduct = (productToAdd, quantity) => {
        // creamos un nuevo objeto con los datos que recibimos
                    const newObj = {
                      ...productToAdd,
                      quantity
                    }
        // si el id del nuevo objeto está en el carrito
                    if(inCart(newObj.id)){
        // vamos a hacer un map
                        cart.map(el => {
        // si hay coincidencia entre los id de ambos items solo va a sumar la cantidad
                          if(el.id === newObj.id)  {
                            el.quantity += newObj.quantity
                          }
                          return(el)
                          })
                  
                      }
        // sino hay coincidencia, va a agregar el nuevo producto
        else {
                        setCart([...cart, newObj])
                        
                      }
                    }

const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
};

const totalProducts = () =>
    cart.reduce(
        (acumulador, productoActual) => acumulador + productoActual.quantity,
        0,
    );

const clearCart = () => setCart([]);

const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

const removeProduct = (id) =>
    setCart(cart.filter((product) => product.id !== id));

return (
    <CartContext.Provider
        value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart,
        }}
    >
        {children}
    </CartContext.Provider>
);
};

export default CartProvider;