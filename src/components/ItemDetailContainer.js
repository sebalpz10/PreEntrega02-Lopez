import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});

    useEffect(() => {
        const order = fetch("https://fakestoreapi.com/products")


        order
            .then((response) => {
                const products = response.json()
                return products
            })
            .then((product) => {
                setProduct(product)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <ItemDetail product={product}></ItemDetail>
    );
}

export default ItemDetailContainer;