import {LOGIN_START, REGISTER, LOGOUT} from '../actions'

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
        case LOGOUT: 
        default:
            return state;
     }
 }