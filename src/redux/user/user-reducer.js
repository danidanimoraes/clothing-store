import UserActionTypes from "./user.types";

// For when it's fired the first time and there is no state
const INITIAL_STATE = {
    currentUser: null,
    error: null
}

// Default value used when prevState is undefined, not null
const userReducer = (prevState = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...prevState,
                currentUser: action.payload,
                error: null
            }
        case UserActionTypes.SIGN_IN_FAILURE:
            return {
                ...prevState,
                error: action.payload
            }
        default:
            return prevState;
    }
}

export default userReducer;