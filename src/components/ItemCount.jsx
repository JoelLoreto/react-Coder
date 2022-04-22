import {useState} from "react";



const ItemCount = ({onAdd, initial, stock}) => {

    const [count, setCount] = useState(initial)
    
   
    const sumarContador = () => {
       count < stock && setCount(count +1)
    }

    const restarContador = () => {
     count > initial && setCount(count -1)
    }


    return (
        <>
            <p>Elegir cantidad de productos: {count}</p>
            <button onClick={restarContador}>quitar</button>
            <button onClick={sumarContador}>agregar</button>
            <button onClick={ () => onAdd(count)}>Agregar al carrito</button>
        </>
    )
    
}

export default ItemCount
