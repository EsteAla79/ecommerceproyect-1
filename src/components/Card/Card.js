import './Card.css'
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import Modal from '../Modal/Modal';
import ItemCount from '../ItemCount/ItemCount'
//import Count from '../ItemCount/ItemCount'

const CardItem = ({price, title, image,}) => {
    const [open, setOpen] = useState(false)
   

    const handleClose = () => {
        setOpen(false)
    }
   
    return (
        <Card sx={{ minWidth: 275 }} className="card-item-container">
            <CardContent>
                <div className="card-item">
                    <div>
                        <img src={`./${image}`} alt={"producto"}/>
                    </div>
                    <p>{title}</p>
                    <span>$ {price}</span>
                    <Button variant={'outlined'} onClick={() => setOpen(true)} >Detalle</Button> 
                </div>
                <div>
                    <Button>
                        <ItemCount/>
                    </Button>
                </div>              
            </CardContent>
            {open && (
            <Modal handleClose={handleClose} open={open}>
                <h2>Detalle</h2>
                <img src={`./${image}`} alt={"producto"} />
            </Modal>
            )}
        </Card>
    )

}



export default CardItem