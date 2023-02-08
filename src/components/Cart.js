import { useState } from "react"

const Cart = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleClick = (e) => {
        console.log(name, email)
    }

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    return (
        <div>
            <div>
                <input type="text" onChange={handleChangeName} placeholder="Name" />
            </div>
            <div>
                <input type="text" onChange={handleChangeEmail} placeholder="Email" />
            </div>
            <button onClick={handleClick}>BUY</button>
        </div>
    )
}

export default Cart