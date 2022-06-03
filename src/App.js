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

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path='/' element={<Home />}/> 
          <Route path='/contact' element={<Contacto />}/>
          <Route path='/product/:id' element={<Detalle />} /> 
          <Route path='/product/:id' element={<Detalle />} />
          <Route path='*' element={<h1>404 Pagina no encontrada</h1>}/> 
      </Routes>
      </BrowserRouter>
  
      </div>
  )
}

export default App;
