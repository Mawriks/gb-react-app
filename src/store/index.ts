import { compose, createStore, combineReducers } from 'redux';
import { messagesReducer } from './messages/reducer';
import { profileReducer } from './profile/reducer';

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, composeEnhancers());
