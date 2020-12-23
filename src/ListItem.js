import { useGlobalContext } from './context';

function ListItem() {
    const { items, removeItem } = useGlobalContext();
    return (
        <div>
            { 
                items.map(
                    (item, index) => {
                        return <li key={index}>{item.name} <button onClick={() => removeItem(item.name)}>X</button></li>
                    }
                ) 
            }
        </div>
    )
}

export default ListItem;