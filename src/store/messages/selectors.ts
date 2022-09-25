import { StoreState } from '..';

export const selectMessages = (state: StoreState) => state.messages;

export const selectChats = (state: StoreState) =>
  Object.keys(state.messages).map((chatName, index) => ({
    id: Date.now() + index,
    name: chatName,
  }));
