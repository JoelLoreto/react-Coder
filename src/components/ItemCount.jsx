import { useState } from "react"

const ItemCount = () => {

    const [contador, setContador] = useState(1)
    const sumarContador = () => {
        if (contador > 4) {
            alert('no es una cantidad valida')
        } else setContador(contador + 1)
    }

    const restarContador = () => {
        if (contador < 1) {
            alert('no es una cantidad valida')
        } else setContador(contador - 1)
    }


    return (
        <>
            <p>Elegir cantidad de productos: {contador}</p>
            <button onClick={sumarContador}>agregar</button>
            <button onClick={restarContador}>quitar</button>
        </>
    )
}

export default ItemCount