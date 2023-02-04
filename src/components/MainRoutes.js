import { Routes, Route } from "react-router-dom"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import Cart from "./Cart"

const MainRoutes = () => {
    return (
        <main>
            <Routes>

                <Route path="/" element={<ItemListContainer></ItemListContainer>}></Route>

                <Route path="/category/:id" element={<ItemListContainer></ItemListContainer>}></Route>

                <Route path="/item/:id" element={<ItemDetailContainer></ItemDetailContainer>}></Route>

                <Route path="/cart" element={<Cart></Cart>}></Route>

            </Routes>
        </main>
    )
}

export default MainRoutes