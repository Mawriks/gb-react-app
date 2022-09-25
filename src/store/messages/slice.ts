import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MessagesWithIds } from 'src/types';
import { Message } from 'src/types';

export interface AddMessage {
  chatName: string;
  newMessage: Message;
}

const initialState: MessagesWithIds = {
  first: [
    { id: '1', author: 'User', text: 'text' },
    { id: '2', author: 'User', text: 'text2' },
    { id: '3', author: 'User', text: 'text3' },
  ],
  second: [
    { id: '1', author: 'User', text: 'text4' },
    { id: '2', author: 'User', text: 'text5' },
    { id: '3', author: 'User', text: 'text6' },
  ],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addChat: (state, action: PayloadAction<string>) => {
      state[action.payload] = [];
    },
    addMessage: (state, action: PayloadAction<AddMessage>) => {
      state[action.payload.chatName].push({
        id: Date.now(),
        author: action.payload.newMessage.author,
        text: action.payload.newMessage.text,
      });
    },
    deleteChat: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    },
  },
});

let timeoutId: NodeJS.Timeout;
const botAnswer = 'Hey, my name is Bot! I can type this message!';

export const addMessageWithReply = createAsyncThunk(
  'messages/addMessageWithReply',
  (payload: AddMessage, { dispatch }) => {
    const { chatName, newMessage } = payload;
    dispatch(addMessage({ chatName: chatName, newMessage: newMessage }));
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (newMessage.author !== 'Bot') {
      timeoutId = setTimeout(() => {
        dispatch(
          addMessage({
            chatName: chatName,
            newMessage: { text: botAnswer, author: 'Bot' },
          })
        );
      }, 1500);
    }
  }
);

export const { addChat, addMessage, deleteChat } = messagesSlice.actions;
export const messagesReducer = messagesSlice.reducer;
