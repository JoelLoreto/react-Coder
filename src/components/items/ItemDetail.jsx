import React from "react";
import ItemCount from "../ItemCount"

const ItemDetail = ({ name, price, image}) => {
    function onAdd(count) {
        if (count === 0) {
            alert('no se agegaron productos')
        } else alert('se agregaron' + ' ' + count + ' ' + 'productos')
    }
    return (
        <div>
            
            <h4>{name}</h4><br/>
            <h4>{price}</h4><br/>
            <img src={image} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit odit quo architecto harum aperiam in dicta porro natus facilis cupiditate nulla a maiores, ipsam tempora officiis omnis ducimus error obcaecati?</p>
            
            <ItemCount initial={1} onAdd={onAdd} />
        </div>
    )
}

export default ItemDetail