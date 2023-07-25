import { combineReducers } from 'redux';
import userReducer from './userSlice.jsx';

const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;