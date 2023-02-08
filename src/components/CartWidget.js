import { Link } from "react-router-dom"
import { useCart } from "./CartProvider"

const CartWidget = () => {

    const { totalProducts } = useCart()

    return (
        <Link to="/cart" className="cart">
            <span className="material-icons">shopping_cart</span>
            {totalProducts}
        </Link>
    )
}

export default CartWidget