import { useEffect, useState } from "react"
import ItemList from "./ItemList"

const ItemListContainer = () => {

    const [load, setLoad] = useState(false)
    const [products, setProducts] = useState([])

    useEffect(() => {

        const order = fetch("https://fakestoreapi.com/products")

        order
            .then((response) => {
                const products = response.json()
                return products
            })
            .then((product) => {
                setProducts(product)
                setLoad(true)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            {load ? null : 'Loading'}
            <ItemList products={products}></ItemList>
        </div>
    )
}

export default ItemListContainer