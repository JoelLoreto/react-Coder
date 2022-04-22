import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import ItemCount from "../ItemCount"

const ItemDetail = (productos) => {

    const [number, setNumber] = useState(0)

    const { addToCart } = useContext(CartContext)

    function onAdd(count) {
        setNumber(count)

    }


    return (
        <div>

            <h4>{productos.name}</h4><br />
            <h4>{productos.price}</h4><br />
            <img src={productos.image} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit odit quo architecto harum aperiam in dicta porro natus facilis cupiditate nulla a maiores, ipsam tempora officiis omnis ducimus error obcaecati?</p><br />
            {
                number === 0 ? <ItemCount stock={productos.stock} initial={1} onAdd={onAdd} /> :
                    <button onClick={() => {

                        addToCart({ ...productos, number })

                    }} >
                        <Link to="/cart" >Ir al carrito</Link>
                    </button>
                    

            }
        </div>
    )
}

export default ItemDetail

