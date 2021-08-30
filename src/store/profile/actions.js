export const TOGGLE_SUBSCRIBE = 'TOGGLE_SUBSCRIBE';

export const createActionToggleSubscribe = (status) => ({
    type: TOGGLE_SUBSCRIBE,
    payload: status
})