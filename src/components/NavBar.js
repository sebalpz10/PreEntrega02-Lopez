import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = (props) => {

    const { isHeader, textLinkFooter, hrefLinkFooter } = props

    if (isHeader) {
        return (
            <nav className="header_navbar">
                <ul className="header_ul">
                    <li className="header_li">
                        <Link className="header_link" to="/category/tools">Tools</Link>
                    </li>
                    <li className="header_li">
                        <Link className="header_link" to="/category/clothes">Clothes</Link>
                    </li>
                </ul>
                <CartWidget></CartWidget>
            </nav>
        )
    } else {
        return (
            <nav className="footer_navbar">
                <Link to={hrefLinkFooter} className="footer_link">{textLinkFooter}</Link>
            </nav>
        )
    }
}

export default NavBar