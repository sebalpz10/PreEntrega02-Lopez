import ItemCount from "./ItemCount"

const ItemDetail = ({ product, stock = 5 }) => {

    const onAdd = (parametro) => {
        console.log(parametro)
    }

    return (
        <article>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <p>{product.price}</p>
            <ItemCount stock={stock} onAdd={onAdd}></ItemCount>
        </article>
    )
}

export default ItemDetail