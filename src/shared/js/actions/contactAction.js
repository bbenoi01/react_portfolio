import axios from 'axios';
export const types = {
    UPDATE_FIRST_NAME: 'UPDATE_FIRST_NAME',
    UPDATE_LAST_NAME: 'UPDATE_LAST_NAME',
    UPDATE_EMAIL: 'UPDATE_EMAIL'
};


export function firstNameInput(firstName) {
    return {
        type: types.UPDATE_FIRST_NAME,
        payload: { firstName }
    };
};

export function lastNameInput(lastName) {
    return {
        type: types.UPDATE_LAST_NAME,
        payload: { lastName }
    };
};

export function emailInput(email) {
    return {
        type: types.UPDATE_EMAIL,
        payload: { email }
    };
};