const ItemDetail = ({data}) => {
    return (
        <div>
            <h2>{data.title}</h2>
            <p>{data.price}</p>
            <p>{data.description}</p>
        </div>
    )
}


export default ItemDetail