import {LOGIN_START, REGISTER} from '../actions'

const initalState = {
    isLoggingIn: false,
    isRegistering: false
}

 export const reducer = (state = initalState, action) =>{
     switch(action.type){
        case LOGIN_START: 
            return{
                ...state,
                isLoggingIn: true
            }
        break;
        
        case REGISTER:
            return{
                ...state, 
                isRegistering: true
            }
        default:
            return state;
     }
 }