import './ItemCount.css'
import { useState } from 'react';
import { Button } from '@mui/material';

const ItemCount = ({initial}) => {
const [count, setCount] = useState(1)
const [stock, setStock] = useState(5)

const addCount = () => {
    setStock(stock - 1)
    setCount(count + 1)
}
const removeCount = () => {
    setStock(stock + 1)
    setCount(count - 1)
}

const onAdd = () => {
    console.log (count)
}


return (

        <div className="count-item">
            <div>
            <Button onClick={removeCount} disabled={count == 0}>-</Button>
            <p>{count}</p>
            <Button onClick={addCount} disabled={count == 5}>+</Button>
            </div>
            <div>
                <Button onClick={onAdd}>Comprar</Button> 
            </div>
        </div>
      
        
    )

}


export default ItemCount