import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { profileReducer } from "./profile/reducer";
import { messagesReducer } from './messages';
import { chatsReducer } from "./chats";
import { personReducer } from "./person";
import { userReducer } from './user'


const rootReducer = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    chats: chatsReducer,
    person: personReducer,
    user: userReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk),
))
