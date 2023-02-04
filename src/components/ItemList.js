import Item from "./Item"

const ItemList = ({ products }) => {
    return (
        <div>
            {products.map((product) => {
                return (
                    <Item product={product} key={product.id}></Item>
                )
            })}
        </div>
    )
}

export default ItemList