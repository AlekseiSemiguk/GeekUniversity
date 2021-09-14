import { SignalCellularNullSharp } from "@material-ui/icons";
import { ADD_CHAT, REMOVE_CHAT, ADD_CHATS } from "./index";


export const initialState = {
  chats: [],
}

const filterById = (targetId) => ({ id }) => targetId !== id;

export const chatsReducer = (state = initialState, action) => {
  switch (action?.type) {
    /* case ADD_CHAT: {
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
     }*/

    case ADD_CHATS: {
      return {
        chats: action.payload,
      }
    }

    default: {
      return state;
    }
  }
  
}