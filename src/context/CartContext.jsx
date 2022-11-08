import React, { useContext, useState } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

    const addProduct = (productToAdd, quantity) => {
                    const newObj = {
                      ...productToAdd,
                      quantity
                    }
                    if(isInCart(newObj.id)){
                        cart.map(el => {
                          if(el.id === newObj.id)  {
                            el.quantity += newObj.quantity
                          }
                          return(el)
                          })
                      }
        else {
                        setCart([...cart, newObj])
                        
                      }
                    }

const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0);
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
            cart
        }}
    >
        {children}
    </CartContext.Provider>
);
};

export default CartProvider;