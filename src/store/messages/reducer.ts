import { Reducer } from 'redux';
import { Messages } from 'src/types';
import { ADD_CHAT, ADD_MESSAGE, DELETE_CHAT } from './actions';
import { MessagesActions } from './types';

const initialState: Messages = {
  first: [
    { author: 'User', text: 'text' },
    { author: 'User', text: 'text2' },
    { author: 'User', text: 'text3' },
  ],
  second: [
    { author: 'User', text: 'text4' },
    { author: 'User', text: 'text5' },
    { author: 'User', text: 'text6' },
  ],
};

export const messagesReducer: Reducer<Messages, MessagesActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_CHAT: {
      return {
        ...state,
        [action.chatName]: [],
      };
    }
    case ADD_MESSAGE: {
      return {
        ...state,
        [action.chatName]: [...state[action.chatName], action.newMessage],
      };
    }
    case DELETE_CHAT: {
      const messages = { ...state };
      delete messages[action.chatName];
      return {
        ...messages,
      };
    }
    default:
      return state;
  }
};
