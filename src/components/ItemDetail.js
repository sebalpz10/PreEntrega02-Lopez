import ItemCount from "./ItemCount"

const ItemDetail = ({ title, img, price, stock = 5 }) => {

    const onAdd = (parametro) => {
        console.log(parametro)
    }

    return (
        <div>
            <h1>ItemDetail - $1000</h1>
            <img src="https://picsum.photos/200/300" alt="picsum" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia error deserunt fugit tempora sequi perferendis itaque nulla corrupti similique voluptatum eveniet neque maxime rem obcaecati voluptates architecto esse, unde aut aspernatur omnis necessitatibus! Expedita est dicta in, suscipit maiores quisquam inventore animi autem corporis minima tempora possimus, aperiam quod optio.</p>
            <ItemCount stock={stock} onAdd={onAdd}></ItemCount>
        </div>
    )
}

export default ItemDetail