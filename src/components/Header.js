import NavBar from "./NavBar"
import { Link } from "react-router-dom"

const Header = () => {

    const isHeader = true

    return (
        <header className="header">
            <Link to="/">
                <h1 className="header_title">Title</h1>
            </Link>
            <NavBar isHeader={isHeader}></NavBar>
        </header>
    )
}

export default Header