import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar  from './components/Navbar/NavBar';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
        </Routes>
        {/* <Cart /> */}
      </BrowserRouter>
    </>
    
  );
}

export default App;

// {<ItemListContainer texto='Esteban' />
//         <ItemDetailContainer />}