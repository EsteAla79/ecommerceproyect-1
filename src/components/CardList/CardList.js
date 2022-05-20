import CardItem from '../Card/Card'
import { Grid } from '@mui/material';

const CardList = ({title}) => {
    return(
        <>
        <h2>{title}</h2>
        <Grid container>
            <Grid item md={3}>
                <CardItem title={"Montchenot Blanco"} price={2500} image={"MB.png"}/> 
          </Grid>
            <Grid item md={3}>
                <CardItem title={"Montchenot 5 años"} price={3000} image={"M5.png"}/> 
          </Grid>
            <Grid item md={3}>
                <CardItem title={"Montchenot 10 años"} price={3500} image={"M10.png"}/>
          </Grid>
            <Grid item md={3}>
                <CardItem title={"Montchenot Blanco"} price={3500} image={"MB.png"}/>
          </Grid>
        </Grid>
        </>
      )
}

export default CardList