import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";


const ItemListContainer = ({ greeting }) => {

    let productosDetalles = [
        { id: 1, name: "Raqueta", precio: "50000", categoria: "deporte" },
        { id: 2, name: "Pelotita de tenis", precio: "2000", categoria: "deporte" },
        { id: 3, name: "Remera", precio: "2000", categoria: "ropa" }
    ]
    const [productos, setProductos] = useState([])
    const { id } = useParams()

    useEffect(() => {

        console.log(id)
        const promesaProductos = new Promise((res, rej) => {

            setTimeout(() => {

                res(productosDetalles)
            }, 1000)
        })

        promesaProductos.then((res) => {

            setProductos(res)

        })
    }, [])



    return (
        <>
            <h2 className="saludo">{greeting}</h2>

            PRODUCTOS:<br />
            <ItemList productos={productos} />



        </>
    )

}

export default ItemListContainer


