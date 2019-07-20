import {LOGIN_START, REGISTER, GETPOTLUCKS, SUCCESS, FAILURE, CREATE_POTLUCK} from '../actions'

const initalState = {
    isLoggingIn: false,
    isRegistering: false,
    fetchingPotlucks: false,
    addingPotluck: false,
    potlucks: [],
    error: null
}

 export const reducer = (state = initalState, action) =>{
     switch(action.type){
        case LOGIN_START: 
            return{
                ...state,
                isLoggingIn: true,
                isRegistering: false
            }
        case REGISTER:
            return{
                ...state, 
                isRegistering: true
            }
        case GETPOTLUCKS: 
            return{
                ...state,
                fetchingPotlucks: true,
                isLoggingIn: false,
                idRegistering: false,
            }
        case SUCCESS: 
            console.log(action.payload)
            return{
                ...state,
                potlucks: action.payload,
                fetchingPotlucks: false
            }
        case FAILURE:
            return{
                ...state,
                fetchingPotlucks: false,
                error: action.payload
            }
        case CREATE_POTLUCK:
            return {
                ...state,
                addingPotluck: true,
            }
        default:
            return state;
    }
}