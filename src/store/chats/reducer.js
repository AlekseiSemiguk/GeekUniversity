import { ADD_CHAT, REMOVE_CHAT } from "./index";


const initialState = {
  chats: [],
}

const filterById = (targetId) => ({ id }) => targetId !== id;

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT: {
      return {
        chats: [
          ...state.chats,
          action.payload,
        ],
      }
    }
    case REMOVE_CHAT: {

      return {
        chats: state.chats.filter(filterById(action.payload)),
      }
    }
    default: {
      return state;
    }
  }
}