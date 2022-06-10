import { Button } from '@mui/material'
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({data}) => {

    const [cantidad, setCantidad] = useState(0)
    const [showButton, setShowButton] = useState(false)

    const addProductToCart = () => {
        console.log("PRODUCTO A AGREGAR: ", data)
        console.log("CANTIDAD: ", cantidad)
    }

    return (
        
        <div>
            {!showButton ?
            <ItemCount 
                cantidad={cantidad}
                setShowButton={setShowButton}
                setCantidad={setCantidad}
                />
            :
            <Button variant='outlined'><Link to='/cart'>Terminar mi compra</Link></Button>
            }
        </div> 
        
    )
}


export default ItemDetail