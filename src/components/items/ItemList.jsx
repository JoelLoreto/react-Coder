import Item from "./Item"


const ItemList = ({ productos }) => {

    return (
        <>
          {productos && productos.length > 0 ?
                productos.map(item => {
                    return <div key={item.id}>
                        <Item item={item} />
                    </div>
                })
            : "loading"} 

             
                
        </>
    )
}

export default ItemList