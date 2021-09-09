import { TOGGLE_SUBSCRIBE } from "./actions";

/**
 *
 * */
const initialState = {
    subscribe: false
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case TOGGLE_SUBSCRIBE: {
            return {
                ...state,
                subscribe: action.payload
            };
        }

        default: {
            return state;
        }
    }
}