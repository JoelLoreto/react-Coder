import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { traerProducto } from "../../utils/product";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})

    const {id} =useParams()

    useEffect(() => {

        traerProducto(id)
        .then((res)=>{ 
            setProducto(res)
        })
        .catch((error) =>{
            console.log(error)
        });
        
     }, [id])
 

    console.log(producto)


    return (
        <>
        DETALLE:
            <ItemDetail {...producto}/>
        </>
    )

}

export default ItemDetailContainer  