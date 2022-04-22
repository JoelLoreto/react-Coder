import Item from "./item"


const ItemList = ({ productos }) => {

    return (
        <>
             {productos && productos.length > 0 ?
               productos.map((productos) =>(
                    <Item key ={productos.id} productos= {productos}/>
                ))
                : "loading"}
                
                
        </>
    )
}

export default ItemList
