import { createStore, combineReducers } from 'redux';
import { profileReducer } from "./profile/reduce";
import { messagesReducer } from './messages';
import { chatsReducer } from "./chats";

const rootReducer = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    chats: chatsReducer,
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())