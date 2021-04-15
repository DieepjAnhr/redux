import { combineReducers } from 'redux';
import changeValueReducer from './changeValue';

const rootReducer = combineReducers({
    getStateText: changeValueReducer,
})

export default rootReducer;