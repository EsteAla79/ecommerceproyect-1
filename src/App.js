import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import productos from './utils/productsMock'
import CardList from './components/CardList/CardList';
import { useState, useEffect } from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Contacto from './pages/Contacto';
import Home from './pages/Home';
import NotFound from './pages/NotFound'
import { DetailsTwoTone } from '@mui/icons-material';
import Detalle from './pages/Detalle';
import ProductList from './pages/ProductList';
import ThemeProvider from './Context/ThemeContext'
import { CartProvider} from './Context/CartContext';
import Cart from './pages/Cart'
 
function App() {

  return (
    <div className="App">
      <CartProvider>
        <ThemeProvider>
          <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/contact' element={<Contacto />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/products/:category' element={<ProductList />} />
                <Route path='/product/:id' element={<Detalle />} />
                <Route path='/' element={<Home />} /> 
                <Route path='*' element={<h1>404 Pagina no encontrada</h1>} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </CartProvider>
      </div>
  )
}

export default App;
