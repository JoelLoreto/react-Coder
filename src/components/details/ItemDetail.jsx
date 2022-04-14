/* 
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount'

const ItemDetail = ({item}) => {

    return (
        <div key={item.id}>
            <h4>{item.name}</h4>
            <h4>Price: {item.price}</h4>
            <div>
                {Array(item.starts)
                    .fill()
                    .map((_, i) => (
                        <p>###</p>
                    ))}
            </div>
            <div>
               <ItemCount/>
            </div>
            <div>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default ItemDetail */