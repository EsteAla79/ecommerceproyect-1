import CardList from "../components/CardList/CardList"
import { useEffect, useState } from "react"
import productos from "../utils/productsMock"

const Home = () => {
    
    return(
        <div className='general-container'>
            <CardList title={'Productos Recomendados'} products={productos}/>
        </div>

    )
}

export default Home