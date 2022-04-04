import React from "react";
import ItemCount from "../ItemCount";
import ItemList from "./ItemList";


const ItemListContainer = ({ greeting }) => {

    function onAdd(count) {
        if (count === 0) {
            alert('no se agegaron productos')
        } else alert('se agregaron' + ' ' + count + ' ' + 'productos')
    }

    return (
        <>
            <h2 className="saludo">{greeting}</h2>
            <ItemList />
            <ItemCount initial={1} onAdd={onAdd} />

        </>
    )

}

export default ItemListContainer


