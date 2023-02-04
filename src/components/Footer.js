import NavBar from "./NavBar"

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer_copy">Copyright &copy; 2023</p>
            <NavBar
                textLinkFooter="Instagram"
                hrefLinkFooter="https://www.instagram.com"
            >
            </NavBar>
        </footer>
    )
}

export default Footer