import NavBar from "./NavBar"
import { Link } from "react-router-dom"

const Header = () => {

    const isHeader = true

    return (
        <header className="header">
            <h1 className="none">#</h1>
            <Link to="/" className="logo_link">
                <img src="/img/logo/logo.png" alt="logo" className="logo_img" />
            </Link>
            <NavBar isHeader={isHeader}></NavBar>
        </header>
    )
}

export default Header