import { useState, useEffect } from "react";
import CardItem from '../Card/Card'
import { Grid } from '@mui/material';
  
    const CardList = ({title, products}) => {
      

        return(
          <>
            <h2>{title}</h2>
            <Grid container spacing={2}>
                {
                    products.map( ({title, price, image, id}) => {
                        return(
                            <Grid item md={3} key={id}>
                                <CardItem 
                                title={title} 
                                price={price} 
                                image={image}
                                id={id}
                                /> 
                            </Grid>
                        )
                    })
                }
            </Grid>
            </>
            )
            }

        export default CardList 
  
