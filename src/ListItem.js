import { useGlobalContext } from './context';
import Button from '@material-ui/core/Button';
import { FaTrash } from 'react-icons/fa';
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr';

function ListItem() {
    const striker = {
        color: 'red',
        textDecoration: "line-through",
    };
    const { items, removeItem, setClicked } = useGlobalContext();
    return (
        <div>
            { 
                items.map(
                    (item) => {
                        return <li key={item.id} style={item.clicked ? striker : null}><Button onClick={() => setClicked(item.id)}>{item.clicked ? <GrCheckboxSelected /> : <GrCheckbox />}</Button>{item.name}<Button color="secondary" onClick={() => removeItem(item.id)}>   <FaTrash />   </Button></li>
                    }
                ) 
            }
        </div>
    )
}

export default ListItem;