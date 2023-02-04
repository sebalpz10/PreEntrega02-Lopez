import { useState } from "react"

const ItemCount = ({ stock, onAdd }) => {

    const [counter, setCounter] = useState(1)

    const handleAdd = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

    const handleReduce = () => {
        setCounter(counter - 1)
    }

    const handleConfirm = () => {
        onAdd(counter)
    }

    const handleReset = () => {
        setCounter(1)
    }

    return (
        <div>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleAdd}>+</button>
            <p>Cantidad : {counter}</p>
            <button onClick={handleReduce}>-</button>
            <button onClick={handleConfirm}>Buy</button>
        </div>
    )
}

export default ItemCount