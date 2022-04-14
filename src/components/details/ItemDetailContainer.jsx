/* import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = ({productosDetalles}) => {

    const { id } = useParams()
    const [item, setItem] = useState([])


    useEffect(() => {
        console.log(id)
        setTimeout(() => {

            setItem(
                productosDetalles.filter(item => item.id === parseInt(id))
            )

        }, 2000)
    }, [id])

    if (productosDetalles.length === 0) {
        return (
            <>
                <p>Loading</p>
            </>)
    } else {
        return (
            <>
                <ItemDetail productos={item} />
            </>
        )
    }
}

export default ItemDetailContainer */