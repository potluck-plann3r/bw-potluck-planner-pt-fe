import {LOGIN_START} from '../actions'

const initalState = {
    isLoggingIn: false
}

 export const reducer = (state = initalState, action) =>{
     switch(action.type){
        case LOGIN_START: 
            return{
                ...state,
                isLoggingIn: true
            }
        break;

        default:
            return state;
     }
 }