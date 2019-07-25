import {combineReducers} from 'redux';
import {reducer} from './LoginReducer';
import {potluckViewReducer} from './PotluckViewReducer'

export default combineReducers({
    reducer,
    potluckViewReducer
});