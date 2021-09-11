import { profileApi } from "../../api";
//export const TOGGLE_SUBSCRIBE = 'TOGGLE_SUBSCRIBE';
export const EDIT_NAME = 'EDIT_NAME';

/*export const createActionToggleSubscribe = (status) => ({
    type: TOGGLE_SUBSCRIBE,
    payload: status
})*/

export const createActionEditName = (newName) => ({
    type: EDIT_NAME,
    payload: newName
})

export const initUserName = (dispatch) => {
    profileApi.getUserName((userName) => {
        dispatch(createActionEditName(userName));
    })
}