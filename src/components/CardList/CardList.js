import { useState, useEffect } from "react";
import { Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import CardItem from '../Card/Card'
import { Grid } from '@mui/material';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

  
const CardList = ({title, products}) => {
    return(
    <>
    <h2>{title}</h2>
    <Grid container spacing={2}>
    <Swiper
            spaceBetween={400}
            slidesPerView={2}
            onSlideChange={() => console.log('slide change')}
            modules={[Pagination, Navigation]}
            navigation={true}>

                {
                    products.map( ({title, price, image, id, stock}) => {
                        return(
                            <SwiperSlide key={id}>
                                <CardItem 
                                    title={title} 
                                    price={price} 
                                    image={image}
                                    stock={stock}
                                    id={id}
                                /> 
                            </SwiperSlide>
                        )
                    })
                }
        </Swiper> 
        </Grid>
        </>
    )
}

export default CardList 
  
