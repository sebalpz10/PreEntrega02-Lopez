import React from "react"
import { BrowserRouter } from "react-router-dom"
import Header from "./Header"
import MainRoutes from "./MainRoutes"
import Footer from "./Footer"


const App = () => {
    return (
        <BrowserRouter>
            <Header></Header>
            <MainRoutes></MainRoutes>
            <Footer></Footer>
        </BrowserRouter>
    )
}

export default App