import { TOGGLE_SUBSCRIBE } from "./actions";
import { EDIT_NAME } from "./actions";
//import { GET_NAME } from "./actions";

/**
 *
 * */
const initialState = {
    //subscribe: false,
    username: 'noname'
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        /*case TOGGLE_SUBSCRIBE: {
            return {
                ...state,
                subscribe: action.payload
            };
        }*/

        case EDIT_NAME: {
            return {
                ...state,
                username: action.payload
            };
        }

        default: {
            return state;
        }
    }
}