import ListItem from './ListItem';
import { useGlobalContext } from './context';
import Button from '@material-ui/core/Button';

function List() {
    const { clearAll } = useGlobalContext();
    const divStyle = {
        position: 'relative', left: '50%', top: '100%',
        transform: 'translate(-45%, -50%)',
    };
    return (
        <div  >

            <ul >
                <ListItem />
            </ul>
            <br />
            <Button style={divStyle} color="secondary" onClick={clearAll}>Clear All</Button>
        </div>
    )
}

export default List;