import { useGlobalContext } from './context';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function EntryForm() {
    const { state, setName, handleSubmit } = useGlobalContext();
    const { name } = state;
    const divStyle = {
        position: 'relative', left: '50%', top: '100%',
        transform: 'translate(-45%, -50%)',
    };

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <TextField style={divStyle} variant="filled" value={name} onChange={(e) => setName(e.target.value)} />
                <br/>
                <br />
                <Button style={divStyle} type="submit" variant="contained" color="primary">Add Item</Button>
            </form>
        </div>
    )
}

export default EntryForm;