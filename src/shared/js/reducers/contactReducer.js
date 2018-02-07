import { types } from '../actions/contactAction';

const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    interested: false
};

export default function ContactReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case types.UPDATE_FIRST_NAME: {
            return {
                ...state,
                firstName: payload.firstName
            };
        }

        case types.UPDATE_LAST_NAME: {
            return {
                ...state,
                lastName: payload.lastName
            };
        }

        case types.UPDATE_EMAIL: {
            return {
                ...state,
                email: payload.email
            };
        }
        
        default: {
            return state;
        }
    }
};