import './App.css';
import NavBar from './components/NavBar/NavBar'
import productos from './utils/productsMock'
//import CardList from './components/CardList/CardList';
import { useState, useEffect } from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
      getProducts()
      .then( (response) => {
          setProducts(response)
      })
      .catch( (err) => {
        console.log("Catch: Fallo la llamada.", err)
      })
      .finally( () => {
      })
  }, [])

  const getProducts = () => {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
          resolve(productos)
        }, 2000)
      })
}



  return (
    <div className="App">
      <NavBar/>
      {/*<div className='general-container'>
        <CardList title={'Productos Recomendados'} products={productos}/>
      </div>
  */}
      < ItemDetailContainer />
      </div>
  )
}

export default App;
