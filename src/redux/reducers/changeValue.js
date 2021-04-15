const defaultStateText = true;

const changeStateTextReducer = (state = defaultStateText, action) => {
    switch (action.type) {
        case "change_state_text": {
            return action.newState;
        }
        default:
            return state;
    }
};

export default changeStateTextReducer;