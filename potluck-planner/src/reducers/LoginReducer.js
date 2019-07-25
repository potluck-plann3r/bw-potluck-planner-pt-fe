import {
  LOGIN_START,
  REGISTER,
  GETPOTLUCKS,
  SUCCESS,
  FAILURE,
  CREATE_POTLUCK,
  DELETE_POTLUCK,
  SUCCESS_DELETE_POTLUCK,
  FAILURE_DELETE_POTLUCK
} from '../actions';

const initalState = {

  isLoggingIn: false,
  isRegistering: false,
  fetchingPotlucks: false,
  potlucks: [],
  error: null,
  addingPotlucks: false,
  deletingPotluck: false,
};

export const reducer = (state = initalState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
        isRegistering: false
      };
    case REGISTER:
      return {
        ...state,
        isRegistering: true
      };
    case GETPOTLUCKS:
      return {
        ...state,
        potlucks: action.payload,
        fetchingPotlucks: true,
        isLoggingIn: false,
        isRegistering: false
      };
    case CREATE_POTLUCK:
      return {
        ...state,
        addingPotlucks: true,
        isLoggingIn: false,
        isRegistering: false,
        fetchingPotlucks: false
      };
    case SUCCESS:
      return {
        ...state,
        potlucks: action.payload,
        fetchingPotlucks: false
      };
    case FAILURE:
      return {
        ...state,
        fetchingPotlucks: false,
        error: action.payload
      };

    case DELETE_POTLUCK:
      return{
        ...state,
        deletingPotluck: true
      }

    case SUCCESS_DELETE_POTLUCK:
      return{
        ...state,
        deletingPotluck: false
      }

    case FAILURE_DELETE_POTLUCK:
      return{
        ...state,
        err: action.payload,
        deletingPotluck: false
      }
    default:
      return state;
  }
};
