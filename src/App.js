import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar  from './components/Navbar/NavBar';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import React from 'react';
import { CartProvider   } from './context/CartContext';



function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
          </Routes>
        </CartProvider>

      </BrowserRouter>
    </>
    
  );
}

export default App;

// {<ItemListContainer texto='Esteban' />
//         <ItemDetailContainer />}
{/* <Cart /> */}