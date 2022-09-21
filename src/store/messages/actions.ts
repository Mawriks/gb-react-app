import { Dispatch } from 'redux';
import { Message } from 'src/types';
import { AddChat, AddMessage, DeleteChat } from './types';

export const ADD_CHAT = 'MESSAGES::ADD_CHAT';
export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const DELETE_CHAT = 'MESSAGES::DELETE_CHAT';

export const addChat = (chatName: string): AddChat => ({
  type: ADD_CHAT,
  chatName,
});

export const addMessage = (
  chatName: string,
  newMessage: Message
): AddMessage => ({
  type: ADD_MESSAGE,
  chatName,
  newMessage,
});

export const deleteChat = (chatName: string): DeleteChat => ({
  type: DELETE_CHAT,
  chatName,
});

let id: NodeJS.Timeout;
const botAnswer = 'Hey, my name is Bot! I can type this message!';
export const addMessageWithReply =
  (chatName: string, newMessage: Message) => (dispatch: Dispatch) => {
    dispatch(addMessage(chatName, newMessage));
    if (id) {
      clearTimeout(id);
    }
    if (newMessage.author !== 'Bot') {
      id = setTimeout(() => {
        dispatch(addMessage(chatName, { text: botAnswer, author: 'Bot' }));
      }, 1500);
    }
  };
