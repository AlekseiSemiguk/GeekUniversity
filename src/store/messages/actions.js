
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DELETE_MESSAGES = 'DELETE_MESSAGES';

export const createAddMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: message
})

export const createDeleteMessages = (chatId) => ({
  type: DELETE_MESSAGES,
  payload: chatId
})