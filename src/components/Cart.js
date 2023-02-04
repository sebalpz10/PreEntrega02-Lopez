const Cart = () => {

    const handleClick = (e) => {
        console.log(e)
    }

    return (
        <div>
            <button onClick={handleClick}>BUY</button>
        </div>
    )
}

export default Cart