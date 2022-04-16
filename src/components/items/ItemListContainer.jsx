import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { traerProductos } from "../../utils/product";
import ItemList from "./ItemList";


const ItemListContainer = () => {

   
    const [productos, setProductos] = useState([])
    const {categoryId} = useParams()
    console.log(categoryId)
 

    useEffect(() => {

       traerProductos(categoryId)
       .then((res)=> setProductos(res))
       .catch((error) => console.log(error))
    }, [categoryId])



    return (
        <>
           

            PRODUCTOS:<br />
            <ItemList productos={productos} />



        </>
    )

}

export default ItemListContainer