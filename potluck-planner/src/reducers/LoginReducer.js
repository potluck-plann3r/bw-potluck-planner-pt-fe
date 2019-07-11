import {LOGIN_START} from '../actions'

const initalState = {
    testState: ''
}

 export const reducer = (state = initalState, action) =>{
     switch(action.type){
        case LOGIN_START: 
        break;

        default:
            return state;
     }
 }