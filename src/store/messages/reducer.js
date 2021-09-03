import { ADD_MESSAGE } from "./actions";
import { DELETE_MESSAGES } from "./actions";

const initialState = {
  messages: {},
}

export const messagesReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE: {
      const { chatId } = action.payload;

      if (state.messages.hasOwnProperty(chatId)) {
        state.messages[chatId] = [
          ...state.messages[chatId],
          action.payload,
        ]
      } else {
        state.messages[chatId] = [action.payload];
      }

      return {
        messages: {
          ...state.messages,
        }
      }
    }

    case DELETE_MESSAGES: {
      const chatId = action.payload;
      if (state.messages.hasOwnProperty(chatId)) {
        state.messages[chatId] = undefined;

      }

      return {
        messages: {
          ...state.messages,
        }
      }
    }


    default: {
      return state;
    }
  }

}