import React, { useContext } from "react";
import { CartContext } from "./Context/CartContext";

const Cart = () => {
const {cart, removeItem, clear} = useContext(CartContext)

    return (
        <>
        <h1>Tus productos en el carrito son:</h1>
        <h2>{cart.length} Items</h2>

        {cart.length > 0 && cart.map((item) =>(
            <div key={item.id}>
            <img src={item.image} alt="" />
            <span>{item.name}</span>
            <button onClick={()=>removeItem(item.id)}> Remover</button>
            <button onClick={clear}> Vaciar Carrito</button>

            </div>
        ))}

        </>
    )
}

export default Cart