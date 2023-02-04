import { createContext } from "react";

export const context = createContext()

const Provider = context.Provider

const CartProvider = ({ children }) => {

    const valueOfContext = {
        cart: [],
        totalProducts: 0
    }

    return (
        <Provider value={valueOfContext}>
            {children}
        </Provider>
    )
}

export default CartProvider