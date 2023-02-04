import { Link } from "react-router-dom"

const Item = ({ product }) => {
    return (
        <article key={product.id} className="product_card">
            <img src={`https://picsum.photos/200/200?random=${product.id}`} alt={product.title} className="product_img" />
            <h3 className="product_name">{product.title}</h3>
            <p className="product_price">{product.price}</p>
            <Link to={"/item/" + product.id} className="product_btn">See more</Link>
        </article>
    )
}

export default Item