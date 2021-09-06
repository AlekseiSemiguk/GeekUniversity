import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'
import { profileReducer } from "./profile/reduce";
import { messagesReducer } from './messages';
import { chatsReducer } from "./chats";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    chats: chatsReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(persistReducer(persistConfig, rootReducer), composeEnhancers(
    applyMiddleware(thunk),
))

export const persistor = persistStore(store)
