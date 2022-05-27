import { useState, useEffect } from "react";
import CardItem from '../Card/Card'
import { Grid} from '@mui/material';


const CardList = ({title}) => {
    const [products, setProducts] = useState([])
    const productos = [
    {
        title : 'Montchenot 5 años x 750',
        price : 1500,
        image : 'M5.png',
        description : '',
        stock : 10,
        id : 1  
    },
    {
        title : 'Montchenot 10 años x 750',
        price : 2000,
        image : 'M10.png', 
        description : '',
        stock : 20,
        id : 2

    },
    {
        title : 'Montchenot Chenin Blanc x 750',
        price : 1000,
        image : 'MB.png',
        description : '',
        stock : 30,
        id : 3

    },
    ]

    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
              }, 2000)
            })
    }
    
    useEffect(() => {
        getProducts()
        .then( (response) => {
          setProducts(response)
        })
        .catch( (err) => {
        })
        .finally( () => {
        })
    }, [])
    
    return(
          <>
            <h2>{title}</h2>
            <Grid container spacing={2}>
                {
                    products.map( ({title, price, image, id}) => {
                        return(
                            <Grid item md={3} key={id}>
                                <CardItem title={title} price={price} image={image}/> 
                            </Grid>
                        )
                    })
                }
            </Grid>
            </>
      )
  }

export default CardList