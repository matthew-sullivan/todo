import { useState, useReducer, createContext, useContext } from 'react';
import reducer, { ACTIONS } from './reducer';

const initialState = {
    name: '',
}

const AppContext = createContext();

function AppProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [items, setItems] = useState([
        { id: 0, name: "bob", clicked: false },  
        { id: 1, name: "larry", clicked: false },
        { id: 2, name: "jeff", clicked: false },  
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.name) {
            const newItem = state.name;
            setItems([...items, { id: items.length, name: newItem, clicked: false }]);
            dispatch({ type: ACTIONS.SET_NAME, payload: ''});
        } 
    }
    
    const setName = (id) => {
        dispatch({ type: ACTIONS.SET_NAME, payload: id });
    }

    const removeItem = (id) => {
        const newArray = items.filter((item) => item.id !== id);
        setItems(newArray);
    }

    const setClicked = (id) => {
        const elementsIndex = items.findIndex(item => item.id === id);
        let newArray = [...items];
        newArray[elementsIndex] = {...newArray[elementsIndex], clicked: !newArray[elementsIndex].clicked};
        setItems(newArray);
    }

    const clearAll = () => {
        const newItems = items.filter((item) => item.clicked !== false)
        setItems(newItems);
    }

    const clearAllComplete = () => {
        const newItems = items.filter((item) => item.clicked !== true)
        setItems(newItems);
    }

    return (
        <AppContext.Provider value={{ clearAllComplete, clearAll, setClicked, state, items, setItems, setName, handleSubmit, removeItem}} > {/*value, set value */}
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };