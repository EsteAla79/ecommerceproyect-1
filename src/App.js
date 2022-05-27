import './App.css';
import NavBar from './components/NavBar/NavBar'
import { useState} from 'react';
import productos from './components/ItemListContainer/ItemList'
import CardList from './components/CardList/CardList';
function App() {
const [open, setOpen] = useState(false) 

const handleClose = () => {
  setOpen(false)
}

  return (
    <div className="App">
      <NavBar/>
      <div className='general-container'>
        <CardList title={'Productos Recomendados'} products={productos}/>
        {/* <CardList title={'Productos Relacionados'}/> */}
      </div>
      <button onClick={() => setOpen(true)}>Abrir modal</button>
    </div>
  )
}

export default App;
