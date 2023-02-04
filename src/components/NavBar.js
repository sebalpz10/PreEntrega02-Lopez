import { Link } from "react-router-dom"

const NavBar = (props) => {

    const { isHeader, textLinkFooter, hrefLinkFooter } = props

    if (isHeader) {
        return (
            <nav className="header_navbar">
                <Link className="header_link" to="/products/category01">Category 1</Link>
                <Link className="header_link" to="/products/category02">Category 2</Link>
                <Link to="/carrito">
                    <span className="material-icons">shopping_cart</span>
                </Link>
            </nav>
        )
    } else {
        return (
            <nav className="footer_navbar">
                <Link to={hrefLinkFooter}>{textLinkFooter}</Link>
            </nav>
        )
    }
}

export default NavBar