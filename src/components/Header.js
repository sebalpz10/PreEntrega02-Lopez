import NavBar from "./NavBar"


const Header = () => {

    const isHeader = true

    return (
        <header className="header">
            <Link to="/">
                <h1 className="header_tittle">Tittle</h1>
            </Link>
            <NavBar isHeader={isHeader}></NavBar>
        </header>
    )
}

export default Header