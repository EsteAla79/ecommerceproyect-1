import { useEffect , useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import productos from '../../utils/productsMock'
import { useNavigate, useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const {id, category} = useParams()
    const navigate = useNavigate
    const [product, setProduct] = useState ({})
    
    //const getItem = () => {
    //  return new Promise( (resolve, reject) => {
    //        setTimeout(() => {
    //            resolve(producto)
    //          }, 2000)
    //        })
    //  }

    useEffect(() => {
    //    getItem()
    //    .then( (res) => {
    //        console.log("Respuesta GetItem: ", res)
    //        setProduct(res)
    //    })
    console.log("productFilter: ", productFilter)
    if(productFilter === undefined){
        navigate('/not found')
    }else{
    setProduct(productFilter)
    }
     }, [id])
     const productFilter = productos.find ( (product) => {
         return product.id === id
    })

      return(
        <>
            <div>Contenedor Item</div>
            <ItemDetail data={product}/>
        </>
    )
}

export default ItemDetailContainer