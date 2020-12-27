import { useGlobalContext } from './context';
import Button from '@material-ui/core/Button';
import { GrCheckboxSelected } from 'react-icons/gr';

function CompleteListItem() {
    const striker = {
        color: 'red',
        textDecoration: "line-through",
    };
    const { items, setClicked } = useGlobalContext();
    return (
        <div>
            {
                items.map(
                    (item) => {
                        if (item.clicked) {
                            return <li key={item.id} style={striker}> <Button onClick={() => setClicked(item.id)}>{item.clicked ? <GrCheckboxSelected /> : null}</Button>{item.name} </li>
                        } 
                    }
                )
            }
        </div>
    )
}

export default CompleteListItem;