export const ADD_CHAT = 'ADD_CHAT';

export const REMOVE_CHAT = 'REMOVE_CHAT';

/**
 * @param {object} collection
 * @param {string} collection.id
 * @param {string} collection.title
 * */

export const createAddChat = (chat) => ({
  type: ADD_CHAT,
  payload: chat,
})

export const createRemoveChat = (chatId) => ({
  type: REMOVE_CHAT,
  payload: chatId,
})