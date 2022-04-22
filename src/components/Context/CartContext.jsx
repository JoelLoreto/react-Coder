import { createContext, useContext, useState } from "react";


export const CartContext = createContext()
export const useCart = () => useContext(CartContext)

const CartContextProvider = ({children}) =>{
    
    const [cart, setCart] = useState([])

    const addToCart =(item) => {
        
        const indexProductos = cart.findIndex((cartItem) => cartItem.id === item.id)
        if(indexProductos !== -1){
            const newCart = [...cart]
            newCart[indexProductos].number = newCart[indexProductos].number + item.number + 1
            setCart(newCart)
        }else{
            
            setCart([...cart, item])
        }
        
    }
    
    const removeItem = (id) =>{
        setCart(cart.filter(item => item.id !== id ))
        
    }

    
    const clear = (Item) =>{
        setCart([])
    }

    
    

    return(
        <CartContext.Provider value= {{cart, addToCart, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider

