import { useGlobalContext } from './context';

function EntryForm() {
    const { state, setName, handleSubmit } = useGlobalContext();
    const { name } = state;
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <button type="submit">Add Item</button>
            </form>
        </div>
    )
}

export default EntryForm;