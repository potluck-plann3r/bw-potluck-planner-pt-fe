import {
	LOGIN_START,
	REGISTER,
	GET_POTLUCKS,
	GET_POTLUCKS_SUCCESS,
	GET_POTLUCKS_FAILURE,
	GET_POTLUCK_BY_ID,
	GET_POTLUCKS_BY_ID_SUCCESS,
	GET_POTLUCKS_BY_ID_FAILURE,
	GET_USERS_BY_POTLUCK,
	GET_USERS_BY_POTLUCK_SUCCESS,
	GET_USERS_BY_POTLUCK_FAILURE,
	GET_REQUIREMENTS,
	GET_REQUIREMENTS_SUCCESS,
	GET_REQUIREMENTS_FAILURE,
	CREATE_POTLUCK,
} from "../actions";

const initalState = {
	isLoggingIn: false,
	isRegistering: false,
	fetchingPotlucks: false,
	fetchingPotluck: false,
	fetchingUsers: false,
	fetchingRequirements: false,
	potlucks: [],
	currentPotluck: [],
	currentPotluckUsers: [],
	currentRequirements: [],
	error: null,
	addingPotlucks: false,
};

export const reducer = (state = initalState, action) => {
	switch (action.type) {
		case LOGIN_START:
			return {
				...state,
				isLoggingIn: true,
				isRegistering: false,
			};
		case REGISTER:
			return {
				...state,
				isRegistering: true,
			};
		case GET_POTLUCKS:
			return {
				...state,
				potlucks: action.payload,
				fetchingPotlucks: true,
				isLoggingIn: false,
				isRegistering: false,
			};

		case GET_POTLUCKS_SUCCESS:
			return {
				...state,
				potlucks: action.payload,
				fetchingPotlucks: false,
			};

		case GET_POTLUCKS_FAILURE:
			return {
				...state,
				fetchingPotlucks: false,
				error: action.payload,
			};

		case GET_POTLUCK_BY_ID:
			return {
				...state,
				currentPotluck: action.payload,
				fetchingPotluck: true,
				isLoggingIn: false,
				isRegistering: false,
			};
		case GET_POTLUCKS_BY_ID_SUCCESS:
			return {
				...state,
				currentPotluck: action.payload,
				fetchingPotluck: false,
			};

		case GET_POTLUCKS_BY_ID_FAILURE:
			return {
				...state,
				fetchingPotluck: false,
				error: action.payload,
			};

		// Get User By Potluck ID

		case GET_USERS_BY_POTLUCK:
			return {
				...state,
				currentPotluckUsers: action.payload,
				fetchingUsers: true,
			};
		case GET_USERS_BY_POTLUCK_SUCCESS:
			return {
				...state,
				currentPotluckUsers: action.payload,
				fetchingUsers: false,
			};

		case GET_USERS_BY_POTLUCK_FAILURE:
			return {
				...state,
				fetchingUsers: false,
				error: action.payload,
			};
		// Get Requirements
		case GET_REQUIREMENTS:
			return {
				...state,
				fetchingRequirements: true,
				currentRequirements: action.payload,
			};
		case GET_REQUIREMENTS_SUCCESS:
			return {
				...state,
				fetchingRequirements: false,
				currentRequirements: action.payload,
			};
		case GET_REQUIREMENTS_FAILURE:
			return {
				...state,
				fetchingRequirements: false,
				error: action.payload,
			};
		case CREATE_POTLUCK:
			return {
				...state,
				addingPotlucks: true,
				isLoggingIn: false,
				isRegistering: false,
				fetchingPotlucks: false,
			};

		default:
			return state;
	}
};
