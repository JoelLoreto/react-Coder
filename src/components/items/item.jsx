import React from "react";
import { Link } from "react-router-dom";


const Item = ({ productos }) => {
    return (
        <>
            <h3>{productos.name}</h3>
            <h3>{productos.price}</h3>
            <h3>{productos.category}</h3> 
            <img src={productos.image} alt="" />
            <Link to={`/item/${productos.id}`}>Ver detalle</Link>
        </>

    )
}

export default Item