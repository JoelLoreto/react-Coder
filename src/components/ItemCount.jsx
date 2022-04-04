import { useState } from "react"

const ItemCount = ({onAdd, initial}) => {

    const [count, setCount] = useState(initial)
    const sumarContador = () => {
        if (count > 4) {
            alert('no es una cantidad valida')
        } else setCount(count + 1)
    }

    const restarContador = () => {
        if (count < 1) {
            alert('no es una cantidad valida')
        } else setCount(count - 1)
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