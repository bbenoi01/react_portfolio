import { combineReducers } from 'redux';
import ContactReducer from './reducers/contactReducer';

const rootReducer = combineReducers({
    contact: ContactReducer
});

export default rootReducer;