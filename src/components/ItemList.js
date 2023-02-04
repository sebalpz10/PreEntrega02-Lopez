import Item from "./Item"

const ItemList = ({ products }) => {
    return (
        <section className="item_list">
            {products.map((product) => {
                return (
                    <Item product={product} key={product.id}></Item>
                )
            })}
        </section>
    )
}

export default ItemList