export const ACTIONS = {
    SET_NAME: 'SET_NAME',
}

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.SET_NAME:
            return { name: action.payload };
        default:
            throw new Error("wroooong");
    }
}

export default reducer;