import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";


const Item = ({ item }) => {

    function onAdd(count) {
        if (count === 0) {
            alert('no se agegaron productos')
        } else alert('se agregaron' + ' ' + count + ' ' + 'productos')
    }
    return (
        <div key={item.id}>
            <h4>{item.name}</h4>
            <h4>Precio: {item.precio}</h4>
            <a>
                <Link to={`/ItemDetail/${item.id}`}>Ver Detalles</Link>
            </a>
            <ItemCount initial={1} onAdd={onAdd} />
        </div> 
        
        
        
        )
    }
    
    export default Item
   