import {
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	REGISTER,
	GET_CUR_USER,
	GET_CUR_USER_SUCCESS,
	GET_CUR_USER_FAILURE,
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
	ADD_ATTENDEE,
	ADD_ATTENDEE_SUCCESS,
	ADD_ATTENDEE_FAILURE,
	REMOVE_ATTENDEE,
	REMOVE_ATTENDEE_SUCCESS,
	REMOVE_ATTENDEE_FAILURE,
	ADD_REQUIREMENT,
	ADD_REQUIREMENT_SUCCESS,
	ADD_REQUIREMENT_FAILURE,
	REMOVE_REQUIREMENT,
	REMOVE_REQUIREMENT_SUCCESS,
	REMOVE_REQUIREMENT_FAILURE,
	GET_FOOD,
	GET_FOOD_SUCCESS,
	GET_FOOD_FAILURE,
	CLAIM_REQUIREMENT,
	CLAIM_REQUIREMENT_SUCCESS,
	CLAIM_REQUIREMENT_FAILURE,
} from "../actions";

const initalState = {
	isLoggingIn: false,
	isRegistering: false,
	fetchingPotlucks: false,
	fetchingPotluck: false,
	fetchingUsers: false,
	fetchingRequirements: false,
	gettingCurUser: false,
	currentUser: [],
	potlucks: [],
	currentPotluck: [],
	currentPotluckUsers: [],
	currentRequirements: [],
	currentFood: [],
	error: null,
	addingPotlucks: false,
	addingAttendee: false,
	removingAttendee: false,
	addingReq: false,
	removingReq: false,
	claimingRequirement: false,
};

export const reducer = (state = initalState, action) => {
	switch (action.type) {
		case LOGIN_START:
			return {
				...state,
				isLoggingIn: true,
				isRegistering: false,
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				isLoggingIn: false,
				currentUser: action.payload,
			};
		case LOGIN_FAILURE:
			return {
				...state,
				isLoggingIn: false,
				error: action.payload,
			};
		case REGISTER:
			return {
				...state,
				isRegistering: true,
			};

		case GET_CUR_USER:
			return {
				...state,
				gettingCurUser: true,
			};
		case GET_CUR_USER_SUCCESS:
			return {
				...state,
				gettingCurUser: false,
				currentUser: action.payload,
			};
		case GET_CUR_USER_FAILURE:
			return {
				...state,
				gettingCurUser: false,
				error: action.payload,
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
		// Adding attendees to potluck
		case ADD_ATTENDEE:
			return {
				...state,
				addingAttendee: true,
			};
		case ADD_ATTENDEE_SUCCESS:
			return {
				...state,
				addingAttendee: false,
			};
		case ADD_ATTENDEE_FAILURE:
			return {
				...state,
				addingAttendee: false,
				error: action.payload,
			};
		// Adding attendees to potluck
		case REMOVE_ATTENDEE:
			return {
				...state,
				removeAttendee: true,
			};
		case REMOVE_ATTENDEE_SUCCESS:
			return {
				...state,
				removingAttendee: false,
			};
		case REMOVE_ATTENDEE_FAILURE:
			return {
				...state,
				removingAttendee: false,
				error: action.payload,
			};
		//Adding requirement
		case ADD_REQUIREMENT:
			return {
				...state,
				addingReq: true,
			};
		case ADD_REQUIREMENT_SUCCESS:
			return {
				...state,
				addingReq: false,
			};
		case ADD_REQUIREMENT_FAILURE:
			return {
				...state,
				addingReq: false,
				error: action.payload,
			};
		case REMOVE_REQUIREMENT:
			return {
				...state,
				removingReq: true,
			};
		case REMOVE_REQUIREMENT_SUCCESS:
			return {
				...state,
				removingReq: false,
			};
		case REMOVE_REQUIREMENT_FAILURE:
			return {
				...state,
				removingReq: false,
				error: action.payload,
			};

		//Getting food
		case GET_FOOD:
			return {
				...state,
				gettingFood: true,
			};
		case GET_FOOD_SUCCESS:
			return {
				...state,
				gettingFood: false,
				currentFood: action.payload,
			};
		case GET_FOOD_FAILURE:
			return {
				...state,
				gettingFood: false,
				error: action.payload,
			};

		//Claim food
		case CLAIM_REQUIREMENT:
			return {
				...state,
				claimingRequirement: true,
			};
		case CLAIM_REQUIREMENT_SUCCESS:
			return {
				...state,
				claimingRequirement: false,
			};
		case CLAIM_REQUIREMENT_FAILURE:
			return {
				...state,
				claimingRequirement: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
