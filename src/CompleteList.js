import CompleteListItem from './CompleteListItem';
import { useGlobalContext } from './context';
import Button from '@material-ui/core/Button';

function CompleteList() {
    const { clearAllComplete } = useGlobalContext();
    const divStyle = {
        position: 'relative', left: '50%', top: '100%',
        transform: 'translate(-45%, -50%)',
    };
    return (
        <div  >

            <ul >
                <CompleteListItem />
            </ul>
            <br />
            <Button style={divStyle} color="secondary" onClick={clearAllComplete}>Clear All</Button>
        </div>
    )
}

export default CompleteList;