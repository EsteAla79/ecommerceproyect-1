import CardList from "../components/CardList/CardList"
import { useEffect, useState } from "react"
import productos from "../utils/productsMock"

const Home = () => {
        const [products, setProducts] = useState([])

        useEffect(() => {
            getProducts()
            .then( (response) => {
                setProducts(response)
            })
            .catch( (err) => {
            console.log("Catch: Fallo la llamada.", err)
            })
            .finally( () => {
            })
        }, [])

        const getProducts = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
            })
        }



            return(
        <div className='general-container'>
                <CardList title={'Productos Recomendados'} products={productos}/>
        </div>

    )
}

export default Home