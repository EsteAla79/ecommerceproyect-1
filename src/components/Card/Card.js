import './Card.css'
import { useState, useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import Modal from '../Modal/Modal';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from "react-router-dom"
import ItemDetail from '../ItemDetail/ItemDetail';
import { ThemeContext } from '../../Context/ThemeContext';
import CartContext from '../../Context/CartContext'

const CardItem = ({price, title, image, id}) => {
    const { darkTheme} = useContext(ThemeContext)
    const { addProductToCart }  = useContext(CartContext)
    return (
        <Card sx={{ minWidth: 275 }} className={`card-item-container  ${darkTheme ? 'dark-mode' : ''}`}>
            <CardContent>
                <div className="card-item">
                    <div className="card-item__img-box">
                        <img src={`/${image}`} alt={"producto"}/>
                        <Button variant={'contained'} className="card-btn-details">
                            <Link to={`/product/${id}`}>Ver Detalle</Link>
                        </Button>
                    </div>
                    <div className='card-item__data-box'>
                        <div className='card-info-data'>
                            <p>{title}</p>
                            <span>$ {price}</span>
                        </div>
                        <ItemDetail/>
                        <ItemCount/>
                        <div className='color-group-selector'>
                            <button className='color-selector black'></button>
                            <button className='color-selector green'></button>
                            <button className='color-selector red'></button>
                        </div>
                    </div>
                    <Button variant={'contained'} 
                    className="card-item-button"
                    onClick={addProductToCart}>
                    Agregar al carrito
                    </Button>
                
                </div>              
            </CardContent>
        </Card>
    )

}



export default CardItem