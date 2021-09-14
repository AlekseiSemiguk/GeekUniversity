import { chatsApi } from "../../api";

export const ADD_CHAT = 'ADD_CHAT';

export const ADD_CHATS = 'ADD_CHATS';

export const REMOVE_CHAT = 'REMOVE_CHAT';

/**
 * @param {object} collection
 * @param {string} collection.id
 * @param {string} collection.title
 * */

export const createAddChats = (chats) => ({
  type: ADD_CHATS,
  payload: chats,
})

/*export const createAddChat = (chat) => ({
  type: ADD_CHAT,
  payload: chat,
})

export const createRemoveChat = (chatId) => ({
  type: REMOVE_CHAT,
  payload: chatId,
})*/

export const initChatsTracking = (dispatch) => {
  chatsApi.getList((chats) => {
    dispatch(createAddChats(chats));
  })
}