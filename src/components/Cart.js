const Cart = () => {

    const handleClick = (e) => {
        console.log(e)
    }

    return (
        <div>
            <button onClick={handleClick}>Finish shopping</button>
        </div>
    )
}

export default Cart