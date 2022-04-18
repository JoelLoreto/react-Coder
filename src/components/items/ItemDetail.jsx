import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount"

const ItemDetail = ({ name, price, image, stock }) => {

    const [number, setNumber] = useState(0)

    function onAdd(count) {
        setNumber(count)

    }
    console.log(number)

    return (
        <div>

            <h4>{name}</h4><br />
            <h4>{price}</h4><br />
            <img src={image} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit odit quo architecto harum aperiam in dicta porro natus facilis cupiditate nulla a maiores, ipsam tempora officiis omnis ducimus error obcaecati?</p><br />
            {
                number === 0 ? <ItemCount stock={stock} initial={1} onAdd={onAdd} /> : <button> <Link to="/cart" >Ir al carrito</Link>
                </button>
            }
        </div>
    )
}

export default ItemDetail

/*
if (count === 0) {
    alert('no se agegaron productos')
} else alert('se agregaron' + ' ' + count + ' ' + 'productos') */

//<Link to="/cart" >Ir al carrito</Link>