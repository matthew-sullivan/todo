import { useState, useReducer, createContext, useContext } from 'react';
import reducer, { ACTIONS } from './reducer';

const initialState = {
    name: '',
}

const AppContext = createContext();

function AppProvider({ children }) {
    
    const [state, dispatch] = useReducer(reducer, initialState)
    const [items, setItems] = useState([
        { name: "bob" },
        { name: "larry" },
        { name: "jeff" },
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = state.name;
        setItems([...items, { name: newItem }]);
        dispatch({ type: ACTIONS.SET_NAME, payload: ''});
    }
    
    const setName = (name) => {
        dispatch({ type: ACTIONS.SET_NAME, payload: name });
    }

    const removeItem = (name) => {
        const newArray = items.filter((item) => item.name !== name);
        setItems(newArray);
    }

    return (
        <AppContext.Provider value={{ state,items, setItems, setName, handleSubmit, removeItem}} > {/*value, set value */}
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };