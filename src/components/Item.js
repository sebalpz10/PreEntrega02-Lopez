import { Link } from "react-router-dom"

const Item = ({ product }) => {
    return (
        <article key={product.id}>
            <img src={`https://picsum.photos/200/300?random=${product.id}`} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <Link to={"/item/" + product.id}>See more</Link>
        </article>
    )
}

export default Item