import { createContext, useContext, useState } from "react";

const context = createContext()

const Provider = context.Provider

export const useCart = () => {
    const valueOfContext = useContext(context)
    return valueOfContext
}

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [totalProducts, setTotalProducts] = useState(0)

    // const addProduct = (product, quantity) => {
    //     const copy = [...arr]
    //     copy.push(product)
    //     setCart(copy)
    // }

    // const removeProduct = (id) => {

    // }

    // const clearCart = () => {
    //     setCart([])
    // }

    // const isInCart = (id) => {

    // }

    const valueOfContext = {
        cart: cart,
        totalProducts: totalProducts,
        setCart: setCart,
        setTotalProducts: setTotalProducts
    }

    return (
        <Provider value={valueOfContext}>
            {children}
        </Provider>
    )
}

export default CartProvider